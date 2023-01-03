const { reviewService } = require('../services')
const { catchAsync } = require('../utils/error')

const createUserReivew = catchAsync(async(req, res) => {
    const {storeId, rating, taste_rate, price_rate, service_rate, image, content } = req.body
    const userId = req.user.id
    if(!storeId || !rating || !taste_rate || !price_rate || !service_rate || !image || !content){
        res.status(400).json({message: "KEY_ERROR"})
    }
    await reviewService.createUserReivew(storeId, rating, taste_rate, price_rate, service_rate, image, content, userId)
    res.status(201).json({message:"CREATED_REVIEW"})
})

module.exports = { createUserReivew }