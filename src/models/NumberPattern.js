const mongoose = require('mongoose');

const NumberPatternSchema = new mongoose.Schema({
    sequences: {
        type: [String],
        required: true,
        trim: true
    },
    possAnswer: {
        type: [[String]],
        required: true,
        trim: true
    },
    answer: {
        type: [String],
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('NumberPattern', NumberPatternSchema);
