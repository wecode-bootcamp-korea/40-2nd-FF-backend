const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter')
const reviewRouter = require('./reviewRouter')
const storeRouter = require('./storeRouter') 

router.use('/users', userRouter)
router.use('/reviews', reviewRouter)
router.use('/stores', storeRouter)

module.exports = router