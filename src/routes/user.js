const express = require ('express');
const userSchema = require ('../models/user')
const router = express.Router();

//Ruta de creacion de usuario
router.post('/users', (req, res) =>{
    const user = userSchema (req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Ruta para obtener usuarios
router.get("/users", (req, res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Ruta para obtener un usuarios
router.get("/users/:id", (req, res)=>{
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//Ruta para actualizar usuario
router.put("/users/:id", (req, res)=>{
    const {id} = req.params;
    const {name, Middlename, Lastname, secondlastname, ID, Date, phone, gender, email, Password, state, city, zip, address, neighborhood,} = req.body;
    userSchema
    .updateOne({_id:id}, {$set: {name, Middlename, Lastname, secondlastname, ID, Date, phone, gender, email, Password, state, city, zip, address, neighborhood,}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Ruta para eliminar un usuarios
router.delete("/users/:id", (req, res)=>{
    const {id} = req.params;
    userSchema
    .remove({_id: id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});


module.exports=router;