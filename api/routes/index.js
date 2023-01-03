const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter')
const reviewRouter = require('./reviewRouter')

router.use('/users', userRouter)
router.use('/reviews', reviewRouter)

module.exports = router