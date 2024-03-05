const mongoose = require('mongoose');

const user1schema =new mongoose.Schema({

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
    interest:{
        type:String,
        required:true
    },
    hobby:{
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

exports.user1schema = mongoose.model('Usertest', user1schema);