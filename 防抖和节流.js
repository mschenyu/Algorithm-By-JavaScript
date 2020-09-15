// debounce（去抖） throttle（节流）
/**
 * debounce: 在延迟时间内，如果再次调用函数，就取消上一个定时器，并新建一个定时器，表现是当密集触发（间隔小域wait）的时候不会执行函数，停顿超过wait时才会触发
 * 所以 debounce 适用于 input, keyup, keydown 等事件, 亦或者 click 事件需要防止用户在某个时间范围内多次点击的时候，也可以用。
 */
function debounce(fn, wait){
  let timerId = null;

  function debounced(){
    let context = this; //保存作用域
    let args = arguments;

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
  return debounced;
}

//test
// var resizeFun = function(e) {
//   console.log('resize');
// };
// window.addEventListener('resize', debounce(resizeFun, 500));

/**
 * throttle: 在延迟时间内，如果再次调用函数，不取消上一个定时器，而是取消本次调用，表现是密集触发时，每隔一段时间执行一次
 * 所以 throttle 适用于 scroll, mousemove 等事件。
 */
function throttle(fn, wait){
  let timerId = null;
  let firstInvoke = true; //是否是第一次执行
  
  function throttled(){
    let context = this; //保存作用域
    let args = arguments;

    //如果是第一次触发，直接执行
    if(firstInvoke){
      fn.apply(context, args);
      firstInvoke = false;
      return;
    }

    // 如果定时器已存在，直接返回；
    if(timerId) return;

    timerId = setTimeout(() => {
      clearTimeout(timerId);
      timerId = null;
      fn.apply(context, args);
    }, wait);
  }
  return throttled;
}
//test
var resizeFun = function(e) {
  console.log('resize');
};
window.addEventListener('resize', throttle(resizeFun, 500));