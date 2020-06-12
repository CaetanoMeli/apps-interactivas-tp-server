const GameResolver = require('./gameResolver');

class GamesService {

    static async getGame (name, level) {
        const gameModel = GameResolver.getGame(name);

        const [game] = await gameModel.find({level});

        return game
    }

    static saveGame(name, data) {
        const gameModel = GameResolver.createGame(name, data);

        return gameModel.save()
    }
}

module.exports = GamesService;
