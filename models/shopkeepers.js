var mongoose = require('mongoose');
const shopSchema=new mongoose.Schema({
    skeeperName:String,
    gender:String,
    dob:Number,
    address:String,
    pincode:Number,
    place:String,
    email:String,
    phone:Number,
    username:String,
    pass:String
});
var shopmodel=mongoose.model('shops',shopSchema);
module.exports= {shopmodel}