const Resume = require('../../models/ResumeSchema/Resume.model');


exports.getResume = async(req,res)=>{
    Resume.find({}).exec((err,resume)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(!resume){
            return res.status(404).send({message:"skills not found"});
        }
        return res.json(resume);
    });
};