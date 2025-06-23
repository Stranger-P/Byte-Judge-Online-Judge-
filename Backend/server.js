const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const passport = require('passport');
const adminRoutes = require('./src/routes/adminRoutes');
const problemRoutes = require('./src/routes/problemRoutes');
const submissionRoutes = require('./src/routes/submissionRoutes')
dotenv.config();
require('./src/config/passport'); 
const app = express();


connectDB();

app.use(cors({
  origin: 'http://localhost:5173',  // Allow frontend origin
  credentials: true                 // Allow cookies from cross-origin
}));
app.use(cookieParser());             
app.use(express.json());           
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);   
app.use('/api/admin', adminRoutes);
app.use('/api/problems', problemRoutes); 
app.use('/api/submissions', submissionRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
