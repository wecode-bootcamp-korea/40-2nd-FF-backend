const { storeService } = require('../services')
const { catchAsync } = require('../utils/error')

const getStoreList = catchAsync(async(res) => {
    const storeList = await storeService.getStoreList()
    res.status(200).json({data:storeList})
})  

module.exports = { getStoreList }