const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  level: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model('Rating', RatingSchema); // Le decimos a moongose que registramos ese modelo con ese schema