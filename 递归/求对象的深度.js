//对象某个属性有可能是数组，数组里是对象
//采用递归，同时用第二个参数来记住当前的深度
function maxDepth(obj, currDepth=0){
  if(Array.isArray(obj) && obj.length){
    const arr = obj.map(item => {
      return maxDepth(item, currDepth);
    })
    return Math.max(...arr);
  }
  if(Object.prototype.toString.call(obj) === '[object Object]'){
    const arr = Object.keys(obj).map(item => {
      return maxDepth(obj[item], currDepth+1);  //如果是个对象，至少也会加1
    })
    return Math.max(...arr);
  }

  return currDepth;
}
const testObj = {a:[{b:3}], d:2};
console.log(maxDepth(testObj)) 
