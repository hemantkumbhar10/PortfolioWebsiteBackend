const StackIntro = require('../../models/StackSchemas/StackIntro.model');


exports.getStackIntro = async(req,res)=>{
    await StackIntro.find({}).exec((err,intro)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(!intro){
            return res.status(404).send({message:"Stack intro not found"});
        }

        return res.json(intro);
    })
}

// exports.createStackIntro = async(req,res)=>{
//     const intro= await new StackIntro({
//         introParagraph:req.body.introParagraph,
//     });
//     intro.save((err)=>{
//         if(err){
//             // @ts-ignore
//             res.status(500).send({message,err});
//         }
//         res.json({
//             introParagraph: intro.introParagraph
//         });
//     });
// }