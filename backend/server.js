const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { dbConnect } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
dbConnect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
