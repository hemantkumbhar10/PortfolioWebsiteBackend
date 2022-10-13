const stackskillscontroller = require('../../controllers/StackControllers/stackskills.controller');


module.exports= function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin", "Content-Type", "Accept"
        );
        next();
    });

    app.get('/stackskills', stackskillscontroller.getAllSkills);
};