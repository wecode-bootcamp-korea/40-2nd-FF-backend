const { userService } = require('../services')
const { catchAsync } = require('../utils/error')

const kakaoSignIn = catchAsync(async(req, res) => {
    const code = req.headers.authorization
    const accessToken = await userService.kakaoSignIn(code)
    res.status(200).json({accessToken})
})

module.exports = { kakaoSignIn }