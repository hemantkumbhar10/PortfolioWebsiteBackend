const Projects = require("../../models/ProjectSchema/Projects.model");

exports.getAllProjects = async (req, res) => {
  await Projects.find({}).exec((err, projects) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!projects) {
      return res.status(404).send({ message: "Projects not found" });
    }
    return res.status(200).json(projects);
  });
};
