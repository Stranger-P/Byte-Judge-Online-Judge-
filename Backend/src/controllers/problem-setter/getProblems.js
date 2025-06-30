const Problem = require('../../models/Problem');
const getProblems = async (req, res) => {
  const { page = 1, limit = 10, search, difficulty, tag, sort } = req.query
  const filter = {}

  if (search) {
    filter.title = { $regex: search, $options: 'i' }
  }
  if (difficulty && difficulty !== 'all') {
    filter.difficulty = difficulty
  }
  if (tag && tag !== 'all') {
    filter.tags = tag
  }

  let query = Problem.find(filter)

  // sorting
  if (sort === 'oldest') {
    query = query.sort({ createdAt: 1 })
  } else {
    query = query.sort({ createdAt: -1 })
  }

  const skip = (page - 1) * limit
  const total = await Problem.countDocuments(filter)
  const data  = await query.skip(skip).limit(+limit)

  res.json({ total, data })
};
module.exports = getProblems;