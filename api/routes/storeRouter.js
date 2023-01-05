const express = require('express')
const { storeController } = require('../controllers')

const router = express.Router();

router.get('', storeController.getAllStores)
router.get('/moods/:moodId', storeController.getStoresByMood)
router.get('/:storeId', storeController.getStoreById)
router.get('/likes/:storeId', storeController.getStoreLikes)
router.get('/reviews/:storeId', storeController.getReviewByStore)

module.exports = router