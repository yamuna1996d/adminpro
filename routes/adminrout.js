var express = require('express');
var {adminmodel}= require('../models/adminmodel')
const routers=express.Router();
routers.get('/',(req,res)=>{
    res.send('Hai');
});
routers.post('/adminreg',async(req,res)=>{
        try {
            var data= new adminmodel(req.body);
            var result= await data.save();
            res.json(result);
        } 
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
});
routers.post('/adminlogin',(req,res)=>{
    try {
        var searchuser=req.body.usern;
        var searchpassword= req.body.pass;
        adminmodel.find({
            $and:[
                {
                    "adminUsername":searchuser
                },
                {
                    "adminPassword":searchpassword
                }
            ]
        },(error,data)=>{
            if(error){
                throw error;
            }
            if (data.length>0) {
                res.json({"status":"Success"});
            }
            else{
                res.json({"status":"Failed"});
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
module.exports = routers