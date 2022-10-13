const mongoose = require("mongoose");

const projecT = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Projects = mongoose.model("project", projecT);

module.exports = Projects;



