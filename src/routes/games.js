const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');
const {check} = require('express-validator');

// Crea un juego
// api/games
router.get('/',
    [
        check('type', 'El tipo es obligatorio').not().isEmpty(),
        check('type', 'El tipo ingresado no es válida').isIn(['txt', 'mtc']),
        check('subject', 'El tipo es obligatorio').not().isEmpty(),
        check('subject', 'La asignatura ingresada no es válida').isIn(['math', 'language']),
        check('level', 'El nivel es obligatorio').not().isEmpty(),
        check('level', 'El nivel ingresado no es válido').isIn(['easy', 'medium', 'hard'])
    ],
    gamesController.getGames
);

router.get('/:name', gamesController.getGame);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('name', 'El nombre ingresado no es válido').isIn(['countFast', 'numberPattern', 'equationGame']),
    check('data', 'El contenido es obligatorio').not().isEmpty()
], gamesController.saveGame);

module.exports = router;
