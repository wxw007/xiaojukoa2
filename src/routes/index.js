const router = require('koa-router')();
const exec = require('child_process').execSync;

router.get('/', async (ctx, next) => {
    ctx.body = {
        a:1,
        b:2,
    };
});

router.get('/string', async (ctx, next) => {
    exec('bash /Users/hupimao/Desktop/learn/xiaojukoa2/src/routes/git.sh', (err, stdout, stderr) => {
      console.log('err', err)
      console.log('stdout', stdout)
      console.log('stderr', stderr)
    });
    ctx.body = '脚本执行完毕';

    
});

let a = (function() {
    let n = 0;
    return function () {
        return ++n
    }
})()

router.get('/json', async (ctx, next) => {
    let sum = a()
    ctx.body = {
        title: sum,
    };
});

module.exports = router;
