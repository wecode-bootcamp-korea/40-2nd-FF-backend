const { userDao } = require('../models')
const jwt = require('jsonwebtoken')

const { getAccessTokenByKakao, getUserInfoByKakao } = require('./kakaoService')

const kakaoSignIn = async(code) => {

    const kakaoAccessToken = await getAccessTokenByKakao(code)
    const kakaoUserInfo = await getUserInfoByKakao(kakaoAccessToken)

    const socialId = kakaoUserInfo.sub
    const userInfo = await userDao.getUserBySocialId(socialId)
    
    if(!userInfo){
                
        const newUser = await userDao.createUser(kakaoUserInfo)
        const payLoad = {userId: newUser.insertId}
        const accessToken = jwt.sign(
            payLoad,
            process.env.JWT_SECRET,
            { algorithm: process.env.ALGORITHM, expiresIn: process.env.JWT_EXPIRES_IN}
        )
        return accessToken   
    }

        const payLoad = { userId: userInfo.id }
        const accessToken = jwt.sign(
            payLoad,
            process.env.JWT_SECRET,
            { algorithm: process.env.ALGORITHM, expiresIn: process.env.JWT_EXPIRES_IN } 
        )
        return accessToken
    }

const getUserById = async(userId) => {
    return await userDao.getUserById(userId)
} 

module.exports = { kakaoSignIn, getUserById }