const express = require('express');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job');
const app = express();

app.use(express.json());

app.use(jobRouter);

mongoose.connect('mongodb+srv://attendanceSystem:123@cluster0.szni8ib.mongodb.net/jobapplication').then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log("mongoDB not connected",err);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})