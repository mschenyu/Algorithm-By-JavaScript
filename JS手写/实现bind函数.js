//bind: 返回一个函数，这个函数的this是bind的第一个参数，返回函数的参数是bind接收的其他参数
Function.prototype.my_bind = function(){
  let _this = this; //当前调用bind的函数
  const context = Array.prototype.shift.call(arguments);
  const arg = Array.prototype.slice.call(arguments);
  return function(){
    //要把bind接收的参数和调用后的参数连起来
    _this.apply(context, arg.concat(Array.prototype.slice.call(arguments))); 
  }
}

function a(m, n, o) {
  console.log(this.name + ' ' + m + ' ' + n + ' ' + o);
}

var b = {
  name: 'kong'
};

a.my_bind(b, 7, 8)(9); // kong 7 8 9