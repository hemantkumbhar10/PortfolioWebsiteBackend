const mongoose = require('mongoose');

const experiencE = new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    description:[String]
});

const Experience = mongoose.model('experience', experiencE);

module.exports = Experience;

