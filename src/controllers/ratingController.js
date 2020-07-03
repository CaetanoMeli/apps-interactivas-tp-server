
const RatingService = require('../services/ratingService');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken'); //npm install jsonwebtoken
const { uuid } = require('uuidv4'); //npm install uuidv4

//Function to save rating
exports.saveRating = async (req, res) => {
  const errors = validationResult(req);

  if( !errors.isEmpty() )
      return res.status(400).json({errors: errors.array() });

  const data = req.body;
  
  let message;

  try {
      message =  await RatingService.saveRating(data);
  } catch (e) {
      message = `Error saving rating ${e}`;
  }

  res.send({
      message
  });
}

//Function to get rating
exports.getRating = async (req, res) => {

  const response = await RatingService.getRating()

  res.send(response)
}
