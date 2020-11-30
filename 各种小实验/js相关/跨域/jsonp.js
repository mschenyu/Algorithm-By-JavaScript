/**
 *  jsonp的原理就是利用<script>标签没有跨域限制，通过<script>标签src属性，发送带有callback参数的GET请求，
 * 服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行；后端返回的数据其实就是callback函数的实参。
 * 
 * 缺点：
 * 1.只能发送get请求，因为script的src就是get请求
 * 2.需要服务端进行特殊配置（把数据用callback函数名包裹起来）
 */

 const script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = 'http://www.domain.com:8080/login?user=admin&callback=handleCallback';
 document.body.appendChild(script);

 //回调函数
 function handleCallback(res){
   console.log(res)
 }


 // 服务端返回如下：(返回时就立即执行全局函数)
 handleCallback({data: 1, user: 'admin'})



//后端nodejs代码示例：
var querystring = require('querystring');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    var params = querystring.parse(req.url.split('?')[1]);
    var fn = params.callback;

    // jsonp返回设置
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(fn + '(' + {data: 1, user: 'admin'} + ')');

    res.end();
});
