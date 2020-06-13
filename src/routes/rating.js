// Rutas para crear usuario
const express = require('express'); //usamos express para el router
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const { check } = require('express-validator'); //npm i express-validator , para validar el request.


// Crea un usuario
// api/user
router.post('/',
    [
        check('user', 'El user es obligatorio').not().isEmpty(),
        check('rating', 'El rating es obligatorio').not().isEmpty(),
        check('level', 'El level es obligatorio').not().isEmpty(),
    ],
    ratingController.saveRating
);

router.get('/',
    [],
    ratingController.getRating
);

module.exports = router;