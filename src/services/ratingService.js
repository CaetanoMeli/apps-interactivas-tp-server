const Rating = require('../models/Rating');

class RatingService {

    static async getRating() {
        const ratings = await Rating.find({});
        return ratings
    }

    static saveRating(data) {
        const ratingModel = new Rating(data);
        return ratingModel.save()
    }
}

module.exports = RatingService;
