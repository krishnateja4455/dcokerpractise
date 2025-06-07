const express = require("express");
const cors = require("cors");
const app = express();



app.use(cors());

//testing workflows
//testing actions
//test

app.get('/',(req,res)=>{
    res.status(200).json({message:"home page"});
});

app.post('/contact',(req,res)=>{
    res.status(200).json({message:"contact page"});
})

app.get('/about',(req,res)=>{
    res.status(200).json({message:"about page"});
})

app.get('/contact',(req,res)=>{
    res.status(200).json({message:"contact page"});
})

app.get('/info',(req,res)=>{
    res.status(200).json({message:"info page"});
})

app.get('/contacts',(req,res)=>{
    res.status(200).json({message:"contacts page"});
})

app.get('/blog',(req,res)=>{
    res.status(200).json({message:"contacts blog"});
})


module.exports=app;