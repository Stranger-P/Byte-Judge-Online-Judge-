const Problem = require('../../models/Problem');
const { uploadToS3, deleteFromS3 } = require('../../utils/s3Utils');

const createProblem = async (req, res) => {
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
    const existingProblem = await Problem.findOne({ title });
    if (existingProblem) {
      return res.status(400).json({ message: 'Problem title already exists' });
    }

    let parsedSampleTestCases = [];
    if (sampleTestCases) {
      try {
        parsedSampleTestCases = JSON.parse(sampleTestCases);
        if (!Array.isArray(parsedSampleTestCases)) {
          return res.status(400).json({ message: 'sampleTestCases must be an array' });
        }
      } catch (error) {
        return res.status(400).json({ message: 'Invalid sampleTestCases JSON format' });
      }
    }

    let parsedTestCases = [];
    if (testCases && !testCaseFile) {
      try {
        parsedTestCases = JSON.parse(testCases);
        if (!Array.isArray(parsedTestCases)) {
          return res.status(400).json({ message: 'testCases must be an array' });
        }
      } catch (error) {
        return res.status(400).json({ message: 'Invalid testCases JSON format' });
      }
    }

    let testCaseS3Url = '';
    if (testCaseFile) {
      testCaseS3Url = await uploadToS3(testCaseFile, 'temp');
    } else if (!parsedTestCases.length) {
      return res.status(400).json({ message: 'Test cases or test case file required' });
    }

    const problem = new Problem({
      title,
      statement,
      inputFormat,
      outputFormat,
      constraints,
      sampleTestCases: parsedSampleTestCases,
      testCases: testCaseFile ? [] : parsedTestCases,
      testCaseS3Url,
      explanation,
      createdBy: req.user.id,
      isPublished: isPublished === 'true',
    });

    await problem.save();
    if (testCaseS3Url) {
      const finalUrl = await uploadToS3(testCaseFile, problem._id);
      await deleteFromS3(testCaseS3Url);
      problem.testCaseS3Url = finalUrl;
      await problem.save();
    }

    res.status(201).json({ message: 'Problem created', problem });
  } catch (error) {
    res.status(500).json({ message: 'Server error1', error: error.message });
  }
};

module.exports = createProblem;