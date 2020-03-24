const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken'); //npm install jsonwebtoken
const { uuid } = require('uuidv4'); //npm install uuidv4

//Function to login user
exports.loginUser = async (req, res) => {


    const errors = validationResult(req);

     if( !errors.isEmpty() ) 
         return res.status(400).json({errors: errors.array() })
     
    const { nick, email } = req.body;
    
    try {
        let user; //= await User.findOne({email});

       
        if(user){
            return res.status(400).json({id: 0, msg: 'El usuario ya existe'});
        }

        //#region Mock Response
        let response = { id: uuid(), msg: `${nick} Logeado Correctamente`};
        //#endregion
         
        // login the new user
        //user = new User(req.body);

        // descomentar cuando este la base creada
        //await user.save();


        res.json({response});

    } catch (error) {
        console.log(error);
        res.status(400).send(`Hubo un error, ${error}`);
    }
}



setJWT = () => {
     // create JWT
     const payload = {
        user: {
            nick: nick
        }
    }
    
    // sign JWT
    jwt.sign(payload, process.env.SECRETA, {
        expiresIn: 3600 // 1 hora
    }, (error, token) => {
        if(error) throw error;

        // Mensaje de confirmación
        res.json({ token  });
    });
}