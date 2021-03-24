// debounce（去抖） throttle（节流）
/**
 * debounce: 在延迟时间内，如果再次调用函数，就取消上一个定时器，并新建一个定时器，表现是当密集触发（间隔小域wait）的时候不会执行函数，停顿超过wait时才会触发
 * 所以 debounce 适用于 input, keyup, keydown 等事件, 亦或者 click 事件需要防止用户在某个时间范围内多次点击的时候，也可以用。
 */
function debounce(fn, wait){
  let timerId = null;

  return function (){
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  }
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
  let flag = true;
  let first = true;
  return function (){

    if(first){
      fn.apply(this, arguments)
      first = false;
      return;
    }

    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true;
    }, wait);
  }
}



//test
var resizeFun = function(e) {
  console.log('resize');
};
window.addEventListener('resize', throttle(resizeFun, 1000));