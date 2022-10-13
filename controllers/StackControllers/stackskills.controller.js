const StackSkill = require('../../models/StackSchemas/stackskills.model');


exports.getAllSkills = async(req,res)=>{
    StackSkill.find({}).exec((err,skills)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(!skills){
            return res.status(404).send({message:"skills not found"});
        }
        return res.json(skills);
    });
};