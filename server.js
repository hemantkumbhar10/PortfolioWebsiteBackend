const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();


const corsOptions={
    origin: process.env.CLIENT_PORT,
    credentials:true, 
}






app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json('Welcome toHemant Kumbhars portfolio app, but what are you doing at backend?');
})

require('./config/db');
require('./routes/Stackroutes/intro.routes')(app);
require('./routes/Stackroutes/skills.routes')(app);
require('./routes/Aboutroutes/intro.routes')(app);
require('./routes/Aboutroutes/experience.routes')(app);
require('./routes/Projectroutes/projects.routes')(app);
require('./routes/ResumeRoute/resume.routes')(app);




app.listen(process.env.PORT || 5000, ()=>{
    console.log('Portfolio app started');
})
