/**
 * 首先明确一下赋值、浅拷贝、深拷贝的含义：
 * 赋值：拷贝整个对象的内存地址
 * 浅拷贝：对目标对象/数组的每一项进行拷贝，值类型的直接拷贝值，引用类型的拷贝地址，说白了就是只拷贝一层，Object.assign()就是浅拷贝
 * 深拷贝：对目标对象/数组的每一项进行拷贝，如果是引用类型，就进行递归的深度拷贝，没有对地址的引用
 */

 // 深拷贝的实现：

/**
* 乞丐版：JSON.parse(JSON.stringify());
* 有缺陷
*/

/**
 * 基础版：对数组和对象类型进行递归
 */
function deepClone(target){
  if (typeof target !== 'object' || target === null) {
    return target;
  }
  let cloneTarget = Array.isArray(target)? [] : {}
  for(const key in target){
    cloneTarget[key] = deepClone(target[key])
  }
  return cloneTarget
}


/**
 * 进阶版：考虑循环引用
 */
function deepClone(target, map = new Map()){
  if (typeof target !== 'object' || target === null) {
    return target;
  }
  let cloneTarget = Array.isArray(target)? [] : {}
  // 如果已经拷贝过了，直接返回
  if(map.get(target)) {
    return map.get(target)
  }
  map.set(target, cloneTarget)
  for(const key in target){
    cloneTarget[key] = deepClone(target[key], map)
  }
  return cloneTarget
}


const target = {
  field1: null,
  field2: undefined,
  field3: {
      child: 'child',
      ss: {a:1}
  },
  field4: [2, 4, 8,[0]],
  field5: function(){var a=1}
};
target.target = target
console.log(target)

console.log(deepClone(target))
