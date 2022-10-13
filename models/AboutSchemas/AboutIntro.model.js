const mongoose = require('mongoose');


const aboutIntro = new mongoose.Schema({
    intro:{
        type:String,
        required:true,
    },
    technical:{
        type:String,
        required:true,
    },
    personal:{
        type:String,
        required:true,
    },
});

const AboutIntro = mongoose.model('aboutintro', aboutIntro);

module.exports = AboutIntro;

