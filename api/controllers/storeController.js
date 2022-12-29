const { storeService } = require('../services')

const getAllStores = async (req, res) => {
  const allStores = await storeService.getAllStores()
  res.status(200).json(allStores)
}

const getStoresByMood = async(req, res) => {
  try{
    const moodId = req.params.moodId
    const result = await storeService.getStoresByMood(moodId)
    return res.status(200).json(result)
  } catch(err) {
    console.log(err);
  }
}

const getStoreById = async(req, res) => {
  try{
    const storeId = req.params.storeId
    const result = await storeService.getStoreById(storeId)
    return res.status(200).json(result)
  } catch(err) {
    console.log(err);
  }
}

const getStoreLikes = async(req, res) => {
  try{
    const storeId = req.params.storeId
    const result = await storeService.getStoreLikes(storeId)
    return res.status(200).json(result)
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  getAllStores,
  getStoresByMood,
  getStoreById,
  getStoreLikes
}