 /**
 * 数组扁平化是指将一个多维数组变为一个一维数组
 */

const arr = [1, [2, [3, [4, 5]]], 6]  // --->[1, 2, 3, 4, 5, 6]

 /**
  * 方法一：使用Array.prototype.flat(depth)
  * flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
  * depth(可选)：指定要提取嵌套数组的结构深度，默认值为 1。
  */
 
  const res1 = arr.flat(Infinity)
  console.log(res1)

  /**
   * 方法二：利用Array的toString 
   * 缺点：会把数据类型都转为字符串类型
   */
  const res2 = arr.toString().split(',')
  console.log(res2)

  /**
   * 方法三：正则
   */
  const res3 = JSON.parse(`[${JSON.stringify(arr).replace(/\[|\]/g, '')}]`)
  console.log(res3)

  /**
   * 方法四：使用reduce
   */
  const flatten = arr => {
    return arr.reduce((acc, cur) => {
      return acc.concat(Array.isArray(cur)? flatten(cur) : cur)
    }, [])
  }
  const res4 = flatten(arr)
  console.log(res4)

  /**
   * 方法五：函数递归
   */
  const res5 = []
  const fn = arr => {
    for(let i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        fn(arr[i])
      }else{
        res5.push(arr[i])
      }
    }
  }
  fn(arr)
  console.log(res5)