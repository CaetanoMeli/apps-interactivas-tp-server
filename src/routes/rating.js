// Rutas para crear usuario
const express = require('express'); //usamos express para el router
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const { body } = require('express-validator'); //npm i express-validator , para validar el request.


// Registra un rating nuevo
// api/rating
router.post('/',
  [
    body('user', 'El user es obligatorio').not().isEmpty(),
    body('rating', 'El rating es obligatorio').not().isEmpty(),
    body('level', 'El level es obligatorio').not().isEmpty(),
  ],
  ratingController.saveRating
);

router.get('/',
  [],
  ratingController.getRating
);

module.exports = router;