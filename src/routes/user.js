// Rutas para crear usuario
const express = require('express'); //usamos express para el router
const router = express.Router();
const userController = require('../controllers/userController');
const { check, body } = require('express-validator'); //npm i express-validator , para validar el request.


// Crea un usuario
// api/user
router.post('/',
    [
      body('nick', 'El nick es obligatorio').not().isEmpty(),
      body('avatar', 'El avatar es obligatorio').not().isEmpty(),
        // check('email', 'Agrega un email válido').isEmail(),
    ],
    userController.loginUser
);

router.put('/:id', userController.setUser);

router.get('/:id', userController.getUser);


module.exports = router;