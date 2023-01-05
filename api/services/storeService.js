const { storeDao } = require('../models')

const getStoreList = async() => {
    return storeDao.getStores()
}

const getAllStores = async () => {
  return storeDao.getAllStores()
};

const getStoresByMood = async (moodId) => {
  return storeDao.getStoresByMood(moodId)
}

const getStoreById = async (storeId) => {
  return storeDao.getStoreById(storeId)
}

const getStoreLikes = async (storeId) => {
  return storeDao.getStoreLikes(storeId)
}

const getReviewByStore = async (storeId) => {
     return storeDao.getReviewByStore(storeId)
   }
 
module.exports = {
  getAllStores,
  getStoresByMood,
  getStoreById,
  getStoreLikes,
  getReviewByStore,
  getStoreList
};