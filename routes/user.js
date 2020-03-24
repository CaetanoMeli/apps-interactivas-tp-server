// Rutas para crear usuario
const express = require('express'); //usamos express para el router
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator'); //npm i express-validator , para validar el request.


// Crea un usuario
// api/user
router.post('/',
    [
        check('nick', 'El nick es obligatorio').not().isEmpty(),
        // check('email', 'Agrega un email válido').isEmail(),
    ],
    userController.loginUser
);

module.exports = router;