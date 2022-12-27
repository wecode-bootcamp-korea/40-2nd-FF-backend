const appDataSource = require('./dataSource')

const createUser = async(kakaoUserInfo) => {
    return await appDataSource.query(
        `INSERT INTO 
            users (
                name,
                email,
                gender,
                social_id
            ) VALUES (
                ?,
                ?,
                ?,
                ?
            )
            `, [kakaoUserInfo.nickname, 
                kakaoUserInfo.email, 
                kakaoUserInfo.gender, 
                kakaoUserInfo.sub]
        )
}

const getUserBySocialId = async(socialId) => {
    const [userInfo] = await appDataSource.query(
        `SELECT
            u.id,
            u.name,
            u.email,
            u.gender,
            u.social_id
        FROM users u
        WHERE u.social_id = ?
        `, [socialId]
    )
    return userInfo
}

module.exports = { getUserBySocialId, createUser }