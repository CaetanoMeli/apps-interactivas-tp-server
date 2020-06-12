const { countFastModel, equationModel, numberPatternModel } = require('../models');

class GameResolver {

    static getGame(name) {
        switch (name) {
            case 'countFast': {
                return countFastModel
            }
            case 'equationGame': {
                return equationModel
            }
            case 'numberPattern': {
                return numberPatternModel
            }
        }
    }

    static createGame(name, data) {
        switch (name) {
            case 'countFast': {
                return new countFastModel(data)
            }
            case 'equationGame': {
                return new equationModel(data)
            }
            case 'numberPattern': {
                return new numberPatternModel(data)
            }
        }
    }
}

module.exports = GameResolver;
