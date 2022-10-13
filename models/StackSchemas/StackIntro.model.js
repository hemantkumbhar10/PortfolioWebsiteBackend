const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const stackIntro = new Schema({
    introParagraph :{
        type: String,
        required:true,
    }
});

const StackIntro = mongoose.model('stackintro', stackIntro);

module.exports = StackIntro;