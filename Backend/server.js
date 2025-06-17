const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');

dotenv.config();
const app = express();
connectDB();

app.use(cors({
  origin: 'http://localhost:3000',  // Allow frontend origin
  credentials: true                 // Allow cookies from cross-origin
}));
app.use(cookieParser());             
app.use(express.json());           
app.use(express.urlencoded({extended: true}))
// Routes
app.use('/api/auth', authRoutes);   
// app.get("/", (req, res) => {
//     res.send("every thing is fine");
// })
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
