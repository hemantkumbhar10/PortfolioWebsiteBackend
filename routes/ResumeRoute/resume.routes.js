const resumescontroller = require('../../controllers/ResumeController/resume.controller');


module.exports= function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin", "Content-Type", "Accept"
        );
        next();
    });

    app.get('/resume', resumescontroller.getResume);
};