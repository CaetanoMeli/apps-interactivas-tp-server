const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
  nick: {
    type: String,
    required: true,
    trim: true, //elimina espacios en blanco al inicio y final.
    unique: true // para indicarle al usuario que ese nick ya existe
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('User', UsersSchema); // Le decimos a moongose que registramos ese modelo con ese schema