const Problem = require('../../models/Problem');

const getProblemById = async (req, res) => {
  const { id } = req.params;

  try {
    const query = req.user.role === 'student' 
      ? { _id: id, isPublished: true, isDeleted: false } 
      : { _id: id, isDeleted: false };
    const problem = await Problem.findOne(query);
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    res.json({ problem });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = getProblemById;