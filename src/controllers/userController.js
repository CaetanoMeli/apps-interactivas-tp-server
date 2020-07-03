const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken'); //npm install jsonwebtoken
const { uuid } = require('uuidv4'); //npm install uuidv4

//Function to login user
exports.loginUser = async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() })

  const { nick, avatar } = req.body;

  try {
    let user = await User.findOne({ nick });


    if (user) {
      return res.status(400).json({ id: 0, msg: 'El usuario ya existe' });
    }


    user = new User(req.body);
    await user.save();

    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(400).send(`Hubo un error, ${error}`);
  }
}

exports.setUser = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  
  let data = {
    avatar: req.body.avatar
  }
  User.findOneAndUpdate(
    {
      _id: req.params.id
    },
    {
      $set: data
    },
    {
      new: true
    },
    async function (err, updatedUser) {
      res.status(200).send(updatedUser);
      (err) => {
        res.status(500).send(err);
        console.log(err);
      }
    }
  );
}

exports.getUser = async (req, res) => {
  let data = {
    avatar: req.body.avatar
  }
  User.findOne(
    {
      _id: req.params.id
    },
    async function (err, user) {
      res.status(200).send(user);
      (err) => {
        res.status(500).send(err);
        console.log(err);
      }
    }
  );
}



setJWT = () => {
  // create JWT
  const payload = {
    user: {
      nick: nick
    }
  }

  // sign JWT
  jwt.sign(payload, process.env.SECRETA, {
    expiresIn: 3600 // 1 hora
  }, (error, token) => {
    if (error) throw error;

    // Mensaje de confirmación
    res.json({ token });
  });
}