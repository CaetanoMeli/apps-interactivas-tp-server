const mongoose = require('mongoose');

const EquationSchema = new mongoose.Schema({
    equation: {
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

module.exports = mongoose.model('Equation', EquationSchema);
