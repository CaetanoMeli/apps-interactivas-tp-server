const Games = require('../models/Games');
const { validationResult } = require('express-validator');
const GamesService = require('../services/gamesService');

exports.saveGame = async (req, res) => {
    const errors = validationResult(req);

    if( !errors.isEmpty() )
        return res.status(400).json({errors: errors.array() });

    const { name, data } = req.body;
    let message;

    try {
        message =  await GamesService.saveGame(name, data);
    } catch (e) {
        message = `Error saving game ${name}: ${e}`;
    }

    res.send({
        message
    });
};

exports.getGame = async (req, res) => {
    const errors = validationResult(req);

    if( !errors.isEmpty() )
        return res.status(400).json({errors: errors.array() })

    const { name } = req.params;
    const { level } = req.query;

    const response = await GamesService.getGame(name, level)

    res.send(response)
}

//Function to get games
exports.getGames = async (req, res) => {

    try {
        const errors = validationResult(req);

        if( !errors.isEmpty() )
            return res.status(400).json({errors: errors.array() })

        const {type, level, subject } = req.body;

        let games;
        //#region Mock Response
        let gamesMocked;

        gamesMocked = [
            { id: '1', subject: 'math', type: 'txt',  level: 'easy', question: '8 + ${answer} = 10',correctAnswer: '1',
                answers: [
                    { answerItem : "2" }
                ]},
            { id: '2', subject: 'math', type: 'txt', level: 'easy', question: '5 + ${answer} = 15', correctAnswer: '1',
                answers: [
                    { answerItem : "10" }
                ]},
            { id: '3', subject: 'math', type: 'mtc', level: 'easy', question: '3 + ${answer} = 6', correctAnswer: '2',
                answers: [
                    { answerItem : "2" },
                    { answerItem : "3" },
                    { answerItem : "4" }
                ]},

            { id: '4', subject: 'math', type: 'txt', level: 'medium', question: '2 * ${answer} = 4', correctAnswer: '1',
                answers: [
                    { answerItem : "2" }
                ]},
            { id: '5', subject: 'math', type: 'txt', level: 'medium', question: '3 * ${answer} = 18', correctAnswer: '1',
                answers: [
                    { answerItem : "6" }
                ]},
            { id: '6', subject: 'math', type: 'mtc', level: 'medium', question: '5 * ${answer} = 35', correctAnswer: '3',
                answers: [
                    { answerItem : "5" },
                    { answerItem : "6" },
                    { answerItem : "7" }
                ]},

            { id: '7', subject: 'math', type: 'txt', level: 'hard', question: '(5 + ${answer}) / 8 = 5', correctAnswer: '1',
                answers: [
                    { answerItem : "40" }
                ]},
            { id: '8', subject: 'math', type: 'txt', level: 'hard', question: '5 + ${answer} / 8 = 15', correctAnswer: '1',
                answers: [
                    { answerItem : "80" }
                ]},
            { id: '9', subject: 'math', type: 'mtc', level: 'hard', question: '(2 + ${answer}) * 3 + 3 = 24', correctAnswer: '2',
                answers: [
                    { answerItem : "8" },
                    { answerItem : "7" },
                    { answerItem : "9" }
                ]},

            { id: '10', subject: 'language', type: 'txt', level: 'easy', question: 'Escritorio tiene ${answer} sílabas', correctAnswer: '1',
                answers: [
                    { answerItem : "4" }
                ]},
            { id: '11', subject: 'language', type: 'txt', level: 'easy', question: 'París empieza con P y termina con…¿?', correctAnswer: '1',
                answers: [
                    { answerItem : "s" }
                ]},
            { id: '12', subject: 'language', type: 'mtc', level: 'easy', question: 'Cinco tiene ${answer} sílabas', correctAnswer: '3',
                answers: [
                    { answerItem : "3" },
                    { answerItem : "1" },
                    { answerItem : "2" }
                ]},

            { id: '13', subject: 'language', type: 'txt', level: 'medium', question: '¡La palabra raiz lleva tilde?', correctAnswer: '1',
                answers: [
                    { answerItem : "Si" }
                ]},
            { id: '14', subject: 'language', type: 'txt', level: 'medium', question: '¡La palabra teclado lleva tilde?', correctAnswer: '1',
                answers: [
                    { answerItem : "No" }
                ]},
            { id: '15', subject: 'language', type: 'mtc', level: 'medium', question: '¡La palabra programacion lleva tilde?', correctAnswer: '2',
                answers: [
                    { answerItem : "Si" },
                    { answerItem : "No" }
                ]},
            { id: '16', subject: 'language', type: 'mtc', level: 'hard', question: '¿Cuántos meses tienen 28 días?', correctAnswer: '3',
                answers: [
                    { answerItem : "Uno" },
                    { answerItem : "Ninguno" },
                    { answerItem : "Todos" }
                ]},
            { id: '17', subject: 'language', type: 'mtc', level: 'hard', question: 'Todos me quieren para descansar. Si ya te lo he dicho, no lo pienses más. ¿Qué soy?', correctAnswer: '3',
                answers: [
                    { answerItem : "nada" },
                    { answerItem : "cama" },
                    { answerItem : "silla" }
                ]},
            { id: '18', subject: 'language', type: 'txt', level: 'hard', question: 'Escriba las primeras cuatro letras de abecedario', correctAnswer: '1',
                answers: [
                    { answerItem : "abec" }
                ]}
        ];

        games = gamesMocked.filter( g => g.type === type && g.level === level && g.subject === subject);

        ////#endregion

        // get the games filtered by level and type
        //games = await Games.find({type: type, level: level});
        res.json({games});

        res.send(`${req.body}`);

    } catch (error) {
        console.log(error);
        res.status(400).send(`Hubo un error, ${error}`);
    }
}
