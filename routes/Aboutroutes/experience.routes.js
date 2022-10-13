const experienceController = require("../../controllers/AboutControllers/experience.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin",
      "Content-Type",
      "Accept"
    );
    next();
  });

  app.get("/experiences", experienceController.getAllExperiences);
};
