const Experience = require("../../models/AboutSchemas/Experience.model");

exports.getAllExperiences = async (req, res) => {
  await Experience.find({}).exec((err, experiences) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!experiences) {
      return res.status(404).send({ message: "Experiences not found" });
    }
    return res.status(200).json(experiences);
  });
};
