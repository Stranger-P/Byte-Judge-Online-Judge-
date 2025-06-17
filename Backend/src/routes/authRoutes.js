const express = require('express');
const router = express.Router();
const { signup, login, getProfile, logout } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.post('/logout', logout);

module.exports = router;
