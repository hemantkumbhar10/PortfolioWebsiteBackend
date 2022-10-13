const mongoose = require('mongoose');

const Resumee = new mongoose.Schema({
    resumelink:{
        type:String,
        required:true
    }
});

const Resume = mongoose.model('resume', Resumee);

module.exports = Resume;