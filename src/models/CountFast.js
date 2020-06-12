const mongoose = require('mongoose');

const CountFastSchema = new mongoose.Schema({
    numbers: {
        type: [Number],
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('CountFast', CountFastSchema);
