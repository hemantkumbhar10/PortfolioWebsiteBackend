const mongoose = require('mongoose');

const stackSKills = new mongoose.Schema({
    imgs:[String]
});

const StackSkills = mongoose.model('stackskill', stackSKills);

module.exports = StackSkills;

