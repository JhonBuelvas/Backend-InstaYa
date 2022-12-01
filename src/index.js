const app = require("./app");
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 9000;

//Conexion a la base de datos
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conexión exitosa'))
.catch((error)=>console.error(error));
app.listen(port, ()=>{
    console.log('server listening on port', port);
});