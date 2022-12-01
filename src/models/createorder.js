const mongoose = require('mongoose');
const createorderSchema = mongoose.Schema ({
    Fromaddress: {
        type:String,
        require:true
    },
    cityorigin: {
        type:String,
        require:true
    },
    sendername:{
        type: String,
        require: true
    },
    senderID: {
        type:Number,
        require:true
    },
    senderphone: {
        type: Number,
        require: true
    },
    Deliveryaddress: {
        type:String,
        require:true
    },
    Deliverycity: {
        type:String,
        require:true
    },
    recipientname:{
        type: String,
        require: true
    },
    recipientID: {
        type:Number,
        require:true
    },
    recipientphone: {
        type: Number,
        require: true
    },
    Date: {
        type: Date,
        require: true
    },
    time:{
        type: Date,
        require: true
    },
    high: {
        type:Number,
        require:true
    },
    width: {
        type:Number,
        require: true
    },
    lenght: {
        type: Number,
        require: true
    },
    weight:{
        type: Number,
        require: true
    },
    estado:{
        type: String,
        require:true
    }

})
module.exports= mongoose.model('createorder',createorderSchema);