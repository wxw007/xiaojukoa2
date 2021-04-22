const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameExistInfo, registerFailInfo } = require('../model/ErrorInfo')

/**
 * 注册
 */
async function register({userName, password, nickName, avator, address, openId}) {
    const userInfo = await getUserInfo(userName, password);
    if(userInfo) {
        return new ErrorModel(registerUserNameExistInfo)
    }

    try {
        await createUser({
            userName,
            password,
            nickName,
            avator,
            address,
            openId,
        })
        return new SuccessModel()
        
    } catch (error) {
        console.log('error', error)
        return new ErrorModel(registerFailInfo)
    }
}

module.exports = {
    register
}