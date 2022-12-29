const { storeDao } = require('../models')

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
  return storeDao.getStoreLikeses(storeId)
}
  

module.exports = {
  getAllStores,
  getStoresByMood,
  getStoreById,
  getStoreLikes
};
