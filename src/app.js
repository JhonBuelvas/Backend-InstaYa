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
// Register

// Login
app.post("/login", async (req, res) => {
try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
        res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
        );

        // save user token
        user.token = token;

        // user
        res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
    } catch (err) {
    console.log(err);
    }
    
    });

module.exports = app;