const router = require('koa-router')()
const child_process = require('child_process')

router.get('/', async (ctx, next) => {
  ctx.body = {
    a:1,
    b:2
  }
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
  child_process.exec('git pull', {cwd:githref}, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }else{
      console.log(time+' '+ stdout)
      // console.log(stdout)
    }
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
