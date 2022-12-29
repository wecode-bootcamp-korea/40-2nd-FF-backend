const { storeDao } = require('../models')

const getStoreList = async() => {
    return storeDao.getStores()
}

module.exports = { getStoreList }