var mongoose = require('mongoose');
const adminSchema= new mongoose.Schema({
    adminUsername:String,
    adminPassword:String
});
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
const adminmodel= mongoose.model('registrations',adminSchema);
const shopmodel=mongoose.model('shops',shopSchema);
module.exports = {adminmodel}
module.exports= {shopmodel}