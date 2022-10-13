const AboutIntro = require("../../models/AboutSchemas/AboutIntro.model");

exports.getWholeintro = async (req, res) => {
  await AboutIntro.find({}).exec((err, intro) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!intro) {
      return res.status(404).send({ message: "about intros not found" });
    }
    return res.json(intro);
  });
};
