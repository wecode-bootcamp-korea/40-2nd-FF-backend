const axios = require('axios')

const getAccessTokenByKakao = async(code) => {
    const result = await axios({
        method: 'post',
        url: 'https://kauth.kakao.com/oauth/token',
        params: {
            "grant_type": 'authorization_code',
            "client_id": process.env.RESTAPI_KEY,
            "redirect_url": process.env.REDIRCT_URL,
            "code": code
        }
    })
    return result.data.access_token
}

const getUserInfoByKakao = async(getAccessTokenByKakao) => {
    const result = await axios({
        method: 'get',
        url: 'https://kapi.kakao.com/v1/oidc/userinfo',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization: `Bearer ${getAccessTokenByKakao}`
        }
    })
    return result.data
}

module.exports = { getAccessTokenByKakao, getUserInfoByKakao }