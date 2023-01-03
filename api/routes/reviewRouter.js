const express = require('express')
const { reviewController } = require('../controllers')
const { loginAuthorization } = require('../utils/auth')

const router = express.Router()

router.post('', loginAuthorization, reviewController.createUserReivew)

module.exports = router