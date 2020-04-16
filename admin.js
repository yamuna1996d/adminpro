var express = require('express');
var parser =require('body-parser');
var mongoose=require('mongoose');
var app=express();
var adminrouter = require('./routes/adminrout');

app.use(parser.urlencoded({extended:false}));
app.use('/admin',adminrouter);

mongoose.connect("");
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started");
});