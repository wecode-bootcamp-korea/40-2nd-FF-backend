const jwt = require('jsonwebtoken')
const { userService } = require('../services')

const loginAuthorization = async(req, res, next) => {
    const access_token = req.headers.authorization
    if(!access_token){
        const error = new Error('NEED_ACCESS_TOKEN')
        error.statusCode = 401

        return res.status(error.statusCode).json({message: error.meesage})
    }
    const decoded = jwt.verify(access_token, process.env.JWT_SECRET)

    const user = await userService.getUserById(decoded.userId)

    if(!user){
        const error = new Error('USER_DOES_NOT_EXIST')
        error.statusCode = 404
        return res.status(error.statusCode).json({message:error.message})
    }
    
    req.user = user
    next()
    
}

module.exports = { loginAuthorization }