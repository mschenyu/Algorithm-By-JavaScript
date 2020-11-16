// 以下代码输出什么 并用es5改写它
for(let i = 0 ; i < 5; i++) {
  setTimeout(()=>{
    console.log(i);
  }, 1000)
}
console.log(i); 
/**
 * 答案：先输出 error i is not defined （同步任务先执行）
 * 然后依次输出0，1，2，3，4
 */

 for(var i=0; i<5; i++){
   (function(i){ // 函数作用域
    setTimeout(function(){ 
      console.log(i)
    })
   })(i)
 }
 console.log(i) // 5