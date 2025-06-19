const Problem = require('../../models/Problem');
const { deleteFromS3 } = require('../../utils/s3Utils');

const deleteProblem = async (req, res) => {
  const { id } = req.params;
  const { permanent } = req.query;

  try {
    const problem = await Problem.findOne({ _id: id, isDeleted: false });
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    if (problem.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    if (permanent === 'true') {
      if (problem.testCaseS3Url) await deleteFromS3(problem.testCaseS3Url);
      await Problem.deleteOne({ _id: id });
      res.json({ message: 'Problem permanently deleted' });
    } else {
      problem.isDeleted = true;
      await problem.save();
      res.json({ message: 'Problem soft deleted' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = deleteProblem;