var http = require('http')
var spawn = require('child_process').spawn
// 脚本地址
const script = '/xxx/xxx.sh';
// 执行指令的地址
const currentPath = '/xxx/xxx';
const password = 'xxx';
http.createServer(function (req, res) {
  if(req.headers['x-gitee-token'] === password) {
    console.log('密码正确 开始拉取代码');
    rumCommand('sh', [script], function( txt ) {
      console.log(`在${currentPath}目录下执行了脚本${script}`);
      console.log(txt);
    });
    res.statusCode = 200;
    res.end('success');
  } else {
    res.statusCode = 200;
    res.end('???');
  }
}).listen(8889);
console.log('listen to 127.0.0.1:8889')
 
function rumCommand( cmd, args, callback ) {
  var child = spawn( cmd, args, {
    cwd: currentPath,
  } )
  var response = ''
  child.stdout.on('data', function( buffer ){ response += buffer.toString(); })
  child.stdout.on('end', function(){ callback( response ) })
}
