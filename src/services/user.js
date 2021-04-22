const {User} = require('../db/model/index')

/**
 * 查询用户信息
 * @param {string} userName
 * @param {string} password
 */
async function getUserInfo (userName, password) {
    let whereOpt = {
        userName
    }
    if(password) {
        whereOpt = {
            ...whereOpt,
            password,
        }
    }

    // 查询
    const result = await User.findOne({
        attributes: ['id', 'userName', 'nickName', 'avator', 'address', 'openId'],
        where: whereOpt
    })

    return result
}

/**
 * 创建用户
 * 
 */
async function createUser({userName,password, nickName, avator, openId, address}) {
    const result = await User.create({
        userName,
        password,
        nickName,
        avator,
        openId,
        address
    })
    return result
}

module.exports = {
    getUserInfo,
    createUser
}

