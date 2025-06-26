const express = require('express');
const cors = require('cors');
const codeRoutes = require('./routes/codeRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  // origin: process.env.ALLOWED_ORIGIN || 'http://backend:4000', // Restrict to backend server
  origin: '*',
}));

app.use('/', codeRoutes);
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Compiler server running on port ${PORT}`));   