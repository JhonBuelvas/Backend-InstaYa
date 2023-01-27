const express = require ('express');
const userSchema = require ('../models/user')
const router = express.Router();
const bcrypt = require ('bcrypt');
const cors = require('cors');

//Ruta de creacion de usuario
router.post('/users', cors(), (req, res) =>{
    const {name, Middlename, Lastname, secondlastname, ID, Date, phone, genero, email, Password, state, city, zip, address, neighborhood,} = req.body;
    
    userSchema.findOne({email}).then((userRegister) =>{
        if (userRegister){
            return res.json({mensaje: 'Ya existe un usuario con ese correo'});
        } if (!name || !Middlename || !Lastname || !secondlastname || !ID || !Date || !phone || !genero || !email || !Password || !state || !city || !zip || !address || !neighborhood){
            return res.json({mensaje: 'Falta alguno de los datos'});        
        }
        bcrypt.hash(Password, 10, (error, contraseñaHasheada) =>{
            if (error) res.json({error});
            else {
                const nuevouser = new userSchema ({
                    name, 
                    Middlename, 
                    Lastname, 
                    secondlastname, 
                    ID, 
                    Date, 
                    phone, 
                    genero, 
                    email, 
                    Password: contraseñaHasheada, 
                    state, 
                    city, 
                    zip, 
                    address, 
                    neighborhood
                });
                nuevouser
                .save()
                .then((data)=>res.json(data))
                .catch((error)=> res.json({message: error}));
            }
        })
    })
    
});

//Ruta para obtener usuarios
router.get("/users",cors(), (req, res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Ruta para obtener un usuarios
router.get("/users/:id",cors(), (req, res)=>{
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//Ruta para actualizar usuario
router.put("/users/:id",cors(), (req, res)=>{
    const {id} = req.params;
    const {name, Middlename, Lastname, secondlastname, ID, Date, phone, genero, email, Password, state, city, zip, address, neighborhood,} = req.body;
    userSchema
    .updateOne({_id:id}, {$set: {name, Middlename, Lastname, secondlastname, ID, Date, phone, genero, email, Password, state, city, zip, address, neighborhood,}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Ruta para eliminar un usuarios
router.delete("/users/:id",cors(), (req, res)=>{
    const {id} = req.params;
    userSchema
    .remove({_id: id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});


module.exports=router;