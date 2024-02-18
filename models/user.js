const mongoose = require('mongoose');

const userschema =new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    phone:{ 
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },

    institute:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    examscore: {
        type:String,
        default: ''
    }
});

exports.userschema = mongoose.model('User', userschema);