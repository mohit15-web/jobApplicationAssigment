const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true

    },
    jobType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
   
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job