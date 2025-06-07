const express = require("express");
const cors = require("cors");
const app = express();



app.use(cors());

//testing workflows

app.get('/',(req,res)=>{
    res.status(200).json({message:"home page"});
});

app.post('/contact',(req,res)=>{
    res.status(200).json({message:"contact page"});
})


module.exports=app;