const express =require('express');
const app=express();
const User = require ('./models/user')
require('dotenv').config();
const userRouters=require('./routes/user')
const createorderRouters= require('./routes/createorder')

app.get("/", (req, res)=>{
    res.send("Hola Desarrollador");
});
app.use(express.json());
//rutas para usuario
app.use('/api', userRouters);
app.use('/api', createorderRouters);

module.exports = app;