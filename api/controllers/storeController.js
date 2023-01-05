const { storeService } = require('../services')
const { catchAsync } = require('../utils/error')

const getAllStores = async (req, res) => {
  try{
    const allStores = await storeService.getAllStores()
    res.status(200).json(allStores)
  } catch (err){
    console.log(err);
    res.status(400).json({message:'getStoresErr'})
  }
  
}

const getStoresByMood = async(req, res) => {
  try{
    const moodId = req.params.moodId
    const result = await storeService.getStoresByMood(moodId)
    return res.status(200).json(result)
  } catch(err) {
    console.log(err);
    res.status(400).json({message:'getMoodsErr'})
  }
}

const getStoreById = async(req, res) => {
  try{
    const storeId = req.params.storeId
    const result = await storeService.getStoreById(storeId)
    return res.status(200).json(result)
  } catch(err) {
    console.log(err);
    res.status(400).json({message:'getStoreIDErr'})
  }
}

const getStoreLikes = async(req, res) => {
  try{
    const storeId = req.params.storeId
    const result = await storeService.getStoreLikes(storeId)
    return res.status(200).json(result)
  } catch(err) {
    console.log(err);
    res.status(400).json({message:'getStoreLikesErr'})
  }
}

const getReviewByStore = async(req, res) => {
     try{
       const storeId = req.params.storeId
       const result = await storeService.getReviewByStore(storeId)
       return res.status(200).json(result)
     } catch(err) {
       console.log(err);
       res.status(400).json({message:'getReviewErr'})
     }
   }


const getStoreList = catchAsync(async(res) => {
  const storeList = await storeService.getStoreList()
  res.status(200).json({data:storeList})
})  

module.exports = {
  getAllStores,
  getStoresByMood,
  getStoreById,
  getStoreLikes,
  getReviewByStore,
  getStoreList
}
