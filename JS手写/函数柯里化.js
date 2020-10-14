/**
 * 柯里化指的是 将一个接受多个参数的函数，变为一次接受一个参数返回一个函数的形式，这样便于再次调用，例如f(1)(2)，当所需参数够了的时候返回执行结果
 */

 function curry(fn, ...args){
   if(args.length>=fn.length){
     return fn(...args)
   }
   return function(...arg2){
     return curry(fn, ...args, ...arg2)
   }
 }

 const sum = (x,y,z) => {
   return x+y+z;
 }

 sum1 = curry(sum)


 /**
  * 扩展：经典面试题：实现add(1)(2)(3)(4)=10; 、 add(1)(1,2,3)(2)=9;
  */

  function add(){
    const _args = [...arguments];
    function fn(){
      _args.push(...arguments);
      return fn;
    }
    fn.toString = function(){
      return _args.reduce((sum,cur) => sum + cur);
    }
    return fn;
  }