var mongoose = require('mongoose');
const shopSchema=new mongoose.Schema({
    skeeperName:String,
    gender:String,
    dob:String,
    address:String,
    pincode:Number,
    place:String,
    email:String,
    phone:Number,
    username:String,
    pass:String
});
const shopmodel=mongoose.model('shops',shopSchema);
module.exports= {shopmodel}