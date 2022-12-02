const express =require('express');
const app=express();
require('dotenv').config();
const userRouters=require('./routes/user')
const createorderRouters= require('./routes/createorder')
const login = require('./controllers/login');
const auth= require('./middlewares/auth');
const getuser = require ('./controllers/getuser')

app.get("/", (req, res)=>{
    res.send("Hola Desarrollador");
});
app.use(express.json());
//rutas para usuario
app.use('/api', userRouters);
app.use('/api', createorderRouters);
app.get('/users', auth, getuser);
app.post('/login', login );

module.exports = app;