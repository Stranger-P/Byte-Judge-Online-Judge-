const Problem = require('../../models/Problem');
const { uploadToS3, deleteFromS3 } = require('../../utils/s3Utils');

const updateProblem = async (req, res) => {
  const { id } = req.params;
  const { 
    title, 
    statement, 
    inputFormat, 
    outputFormat, 
    constraints, 
    sampleTestCases, 
    testCases, 
    explanation, 
    isPublished 
  } = req.body;
  const testCaseFile = req.file;

  try {
    const problem = await Problem.findOne({ _id: id, isDeleted: false });
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    if (problem.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    let testCaseS3Url = problem.testCaseS3Url;
    if (testCaseFile) {
      if (testCaseS3Url) await deleteFromS3(testCaseS3Url);
      testCaseS3Url = await uploadToS3(testCaseFile, id);
    }

    Object.assign(problem, {
      title: title || problem.title,
      statement: statement || problem.statement,
      inputFormat: inputFormat || problem.inputFormat,
      outputFormat: outputFormat || problem.outputFormat,
      constraints: constraints || problem.constraints,
      sampleTestCases: sampleTestCases || problem.sampleTestCases,
      testCases: testCaseFile ? [] : (testCases || problem.testCases),
      testCaseS3Url,
      explanation: explanation !== undefined ? explanation : problem.explanation,
      isPublished: isPublished !== undefined ? isPublished : problem.isPublished,
    });

    await problem.save();
    res.json({ message: 'Problem updated', problem });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = updateProblem;