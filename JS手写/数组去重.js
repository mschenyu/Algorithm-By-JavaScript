const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}, 1];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

/**
 * 方法一：利用Set
 * Set的每一个值都唯一
 */
const res1 = Array.from(new Set(arr))
console.log(res1)

/**
 * 方法二：利用indexOf
 * 当然也可以用include、filter，思路大同小异
 */
const fn1 = arr => {
  const res = [];
  for(let i=0;i<arr.length; i++){
    if(res.indexOf(arr[i]) === -1){
      res.push(arr[i])
    }
  }
  return res;
}
console.log(fn1(arr))

/**
 * 方法三：利用includes
 */
const fn2 = arr => {
  const res = []
  for(let i=0;i<arr.length; i++){
    if(!res.includes(arr[i])){
      res.push(arr[i])
    }
  }
  return res;
}
console.log(fn2(arr))


/**
 * 方法四：利用filter
 */
const fn3 = arr => {
  return arr.filter((item,index) => {
    return arr.indexOf(item) === index
  })
}

console.log(fn3(arr))

/**
 * 方法五：利用Map
 */
const fn4 = arr => {
  const map = new Map()
  const res =[]
  for(let i=0; i<arr.length; i++){
    if(!map.has(arr[i])){
      map.set(arr[i], true)
      res.push(arr[i])
    }
  }
  return res
}
console.log(fn4(arr))

/**
 * 方法六：两层for循环+splice
 * 用每一个值与其他值比较
 */
const fn5 = arr => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
        len--;
        j--;
      }
    }
  }
  return arr;
}
console.log(fn5(arr))
