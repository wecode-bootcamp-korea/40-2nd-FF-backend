const { reviewDao } = require('../models')

const createUserReivew = async(storeId, rating, taste_rate, price_rate, service_rate, image, content, userId) => {
    return reviewDao.createUserReview(storeId, rating, taste_rate, price_rate, service_rate, image, content, userId)
}
module.exports = { createUserReivew }