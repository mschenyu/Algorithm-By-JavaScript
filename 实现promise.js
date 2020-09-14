// 首先看一下普通的promise调用
new Promise(function(resolve){
  //异步请求
  http.get('some_url', function(result){
    resolve(result.id)
  }) 
}).then(function(id){
  // do something
  console.log(id);
});
// 可以看出Promise构造函数接收一个函数（异步操作）作为参数，且这个函数的参数仍是一个函数（异步操作完成时执行），由promise提供，当调用then方法时注册了一个完成时会被调用的函数，当resolve被调用时，说明异步请求已经回来，这时将结果传给通过then注册的函数并执行它。也就实现了把嵌套拿出来了的功能。


//promise的价值在于把多层的回调嵌套变成了链式调用(then里的函数其实就是应该写在resolve位置的回调函数，把它拿出来写成链式而已)，在书写和理解上更加直观简洁一些，本质上还是使用回调函数

// 简单实现一个promise
class Promise {
  callbacks = [];
  state = 'pending'; // 记录状态
  value = null; // 保存异步结果
  constructor(fn){
    fn(this._resolve.bind(this))
  }
  then(onFulfilled){
    if(this.state === 'pending'){ //在resolve之前，注册的函数添加到callbacks
      this.callbacks.push(onFulfilled)
    }else{ //在resolve之后，直接执行回调，返回结果
      onFulfilled(this.value)
    }
    return this; // 实现链式调用，但这种做法只能返回当前promise
  }
  _resolve(value){
    this.state = 'fulfilled'; //改变状态
    this.value = value; //保存结果
    this.callbacks.forEach(fn => fn(value))
  }
}
// then方法注册的onFulfilled是存在一个数组中，可见then方法可以调用多次，注册的多个onFulfilled会在异步操作完成后根据添加顺序依次执行。

// 实现真正的promise链式调用
// 首先明确一点：then返回的一定是一个新的promise实例，也就是说在当前promise达到fulfilled状态后，即开始进行下一个promise。因为一个promise实例相当于一个异步操作，如果直接返回this等于是把一个异步操作的结果一直传来传去，并不是我们想要的效果，我们想要的是在每个then里面返回新的值

class Promise {
  callbacks = [];
  state = 'pending';
  value = null;
  constructor(fn){
    fn(this._resolve.bind(this)) //直接执行传给promise的函数，参数是promise提供的resolve，当异步完成时，内部的resolve被调用
  }
  _resolve(value){
    this.state = 'fulfilled';
    this.value = value; // 异步操作的结果
    this.callbacks.forEach(callback => this._handle(callback)); //开始执行then里的回调
  }
  then(onFulfilled){ //调用then去注册回调时执行：
    return new Promise(resolve => {
      this._handle({
        onFulfilled: onFulfilled || null,
        resolve: resolve
      })
    })
  }
  // 通过handle去处理所有时间段的callback（then注册时，异步操作完成时）
  _handle(callback){
    if(this.state === 'pending'){
      this.callbacks.push(callback);
      return;
    }
    // 如果then中没有传递任何东西
    if(!callback.onFulfilled){
      callback.resolve(this.value);
      return;
    }
    const res = callback.onFulfilled(this.value);
    callback.resolve(res);
  }
}
