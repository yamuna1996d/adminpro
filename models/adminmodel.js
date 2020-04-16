var mongoose = require('mongoose');
const adminSchema= new mongoose.Schema({
    adminUsername:String,
    adminPassword:String
});

const adminmodel= mongoose.model('registrations',adminSchema);
module.exports = {adminmodel}
