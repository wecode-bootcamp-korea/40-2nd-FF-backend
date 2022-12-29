const express = require('express')
const { storeController } = require('../controllers')

const router = express.Router();

router.get('', storeController.getStoreList)

module.exports = router