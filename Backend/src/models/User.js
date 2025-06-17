const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String }, // Optional for Google users
  googleId: { type: String, unique: true, sparse: true }, // For Google Auth
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);