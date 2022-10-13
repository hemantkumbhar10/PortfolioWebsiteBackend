const projectsController = require("../../controllers/ProjectControllers/projects.controller");


module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin", "Content-Type", "Accept"
        );
        next();
    });

    app.get('/projects', projectsController.getAllProjects);
};