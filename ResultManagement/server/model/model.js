const mongoose = require('mongoose');

var schema = new mongoose.Schema({

   roll: {
    type: Number,
    unique : true
   },
   name:String,
   dob:{
    type:Date
   },
   score:Number
});

const UserDb = mongoose.model('userdb',schema);
module.exports = UserDb;