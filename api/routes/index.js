const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter')
const storeRouter = require('./storeRouter')

router.use('/users', userRouter)
router.use('/stores', storeRouter);

module.exports = router