const mongoose = require('mongoose');
require('dotenv').config();



const MONGOURI = process.env.MONGO_URI;
async function main(){
    // @ts-ignore
    await mongoose.connect(MONGOURI, {useUnifiedTopology:true, useNewUrlParser:true});

    console.log('Hemants portfolio database is connected and running successfully :)');
};

main().catch((error)=>{console.log('too bad: ', error)});



















