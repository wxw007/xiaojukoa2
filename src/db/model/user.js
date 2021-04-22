/**
 * @description user数据模型
 */
const seq = require('../seq')
const { STRING } = require('../types')

const User = seq.define('user',{
    userName: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一'
    },
    openId: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: 'openId，唯一'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    nickName: {
        type: STRING,
        allowNull: false,
        comment: '昵称'
    },
    avator: {
        type: STRING,
        comment: '头像，图片地址'
    },
    address: {
        type: STRING,
        comment: '地址'
    }
})

module.exports = User
