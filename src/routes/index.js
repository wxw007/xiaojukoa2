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
      console.log('stdout', stdout)
    });
    ctx.body = '脚本执行完毕';

    
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json',
    };
});

module.exports = router;
