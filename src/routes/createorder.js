const express = require ('express');
const createorderSchema = require ('../models/createorder')
const router = express.Router();
const cors = require('cors');

//Ruta de creacion de usuario
router.post('/createorder', cors(),(req, res) =>{
    const createorder = createorderSchema (req.body);
    createorder
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Ruta para obtener usuarios
router.get("/createorder",cors(), (req, res)=>{
    createorderSchema
    .find({ userId: req.query.userId })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error }));
});
//Ruta para obtener un usuarios
router.get("/createorder/:id",cors(), (req, res)=>{
    const {id} = req.params;
    createorderSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//Ruta para actualizar usuario
router.put("/createorder/:id",cors(), (req, res)=>{
    const {id} = req.params;
    const { Fromaddress, cityorigin, sendername, senderID, senderphone, Deliveryaddress, Deliverycity, recipientname, recipientID, recipientphone, Date, time, high, width, lenght, weight, estado,} = req.body;
    createorderSchema
    .updateOne({_id:id}, {$set: { Fromaddress, cityorigin, sendername, senderID, senderphone, Deliveryaddress, Deliverycity, recipientname, recipientID, recipientphone, Date, time, high, width, lenght, weight, estado,}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Ruta para eliminar un usuarios
router.delete("/createorder/:id",cors(), (req, res)=>{
    const {id} = req.params;
    createorderSchema
    .remove({_id: id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});


module.exports=router;