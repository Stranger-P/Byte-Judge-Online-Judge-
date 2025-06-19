const multer = require('multer');
const path = require('path');
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'text/plain') {
    cb(null, true);
  } else {
    cb(new Error('Only .txt files are allowed'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 20 * 1024 * 1024 }, // 5MB limit
});

module.exports = upload;