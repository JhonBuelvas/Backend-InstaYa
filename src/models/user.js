const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');

const userSchema= mongoose.Schema ({
    name: {
        type:String,
        require:true
    },
    Middlename: {
        type:String,
        require:true
    },
    Lastname:{
        type: String,
        require: true
    },
    secondlastname: {
        type:String,
        require:true
    },
    ID: {
        type: Number,
        require: true
    },
    Date: {
        type: Date,
        require: true
    },
    phone :{
        type: Number,
        require: true
    },
    genero: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    state:{
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    }, 
    zip: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require:true
    },
    neighborhood: {
        type: String,
        require: true
    }, 
    
}, { timestamps: true });
 
module.exports= mongoose.model('user',userSchema);