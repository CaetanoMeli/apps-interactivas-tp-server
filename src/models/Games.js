const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Games', GamesSchema);
