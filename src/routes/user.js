const router = require('koa-router')()
const { register } = require('../controller/user')

router.prefix('/api/user')

router.post('/register', async (ctx, next) => {
    const {userName, password, nickName, avator, address, openId} = ctx.request.body;
    ctx.body = await register({
        userName,
        password,
        nickName,
        avator,
        address,
        openId
    })
})

module.exports = router
