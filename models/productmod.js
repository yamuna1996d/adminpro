var mongoose = require('mongoose');
const productSchema=new mongoose.Schema({
    pName:String,
    pDescription:String,
    sellerName:String,
    sellerAddress:String,
    sellPhone:Number,
    sellerEmail:String,
    wholesalePrice:Number,
    retailPrice:Number,
    gst:Number
});
const promodel=mongoose.model('shops',productSchema);
module.exports= {promodel}