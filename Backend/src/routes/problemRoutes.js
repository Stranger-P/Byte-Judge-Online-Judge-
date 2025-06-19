const express = require('express');
const { uploadToS3 } = require('../utils/s3Utils');
const { 
  createProblem, 
  updateProblem, 
  deleteProblem, 
  previewProblem, 
  getProblems, 
  getProblemById 
} = require('../controllers/problem-setter');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const upload = require('../utils/multerConfig');
const router = express.Router();



router.post('/dummy', upload.single('testCaseFile'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const url = await uploadToS3(file, 'temp');
    res.status(200).json({ message: 'Upload successful', url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'File upload failed' });
  }
});



router.post('/', 
  authMiddleware, 
  roleMiddleware(['problem-setter', 'admin']), 
  upload.single('testCaseFile'), 
  createProblem
);
router.put('/:id', 
  authMiddleware, 
  roleMiddleware(['problem-setter', 'admin']),   
  upload.single('testCaseFile'), 
  updateProblem
);
router.delete('/:id', 
  authMiddleware, 
  roleMiddleware(['problem-setter', 'admin']), 
  deleteProblem
);
router.get('/preview/:id', 
  authMiddleware, 
  roleMiddleware(['problem-setter', 'admin']), 
  previewProblem
);
router.get('/', 
  authMiddleware, 
  roleMiddleware(['student', 'problem-setter', 'admin']), 
  getProblems
);
router.get('/:id', 
  authMiddleware, 
  roleMiddleware(['student', 'problem-setter', 'admin']), 
  getProblemById
);

module.exports = router;