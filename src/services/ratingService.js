const Rating = require('../models/Rating');

class RatingService {

  static async getRating() {
    return Rating.find()
      .populate('user', ['nick', 'avatar'])
      .exec();
  }

  static saveRating(data) {
    const ratingModel = new Rating(data);
    return ratingModel.save()
  }
}

module.exports = RatingService;
