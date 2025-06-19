const Problem = require('../../models/Problem');

const getProblems = async (req, res) => {
  try {
    const query = req.user.role === 'student' 
      ? { isPublished: true, isDeleted: false } 
      : { isDeleted: false };
    const problems = await Problem.find(query).select('title createdAt isPublished');
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = getProblems;