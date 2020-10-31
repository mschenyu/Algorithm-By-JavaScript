// 当出现连续数字的时候以‘-’输出
// [1, 2, 3, 4, 6, 8, 9, 10] 输入
// ["1-4", 6, "8-10"] 输出

// 思路
// 判断前后数字是否相差为1，如果是则加入同一个数组,最后将各数组格式化输出

//分离出连续数组
function arrange(arr){
  let result = [], temp = [];
  let res = arr.sort((source,dest) => {
    return source - dest;
  }).concat(Infinity).reduce((acc,cur) => {
    temp.push(acc);
    if(cur - acc > 1){
      result.push(temp);
      temp = [];
    }
    return cur;
  })
  return result;
}

function formatarr(arr){
  let resArr = [];
  const newArr = arrange(arr);
  for(let i in newArr){
    let str = '';
    if(newArr[i].length>1){
      str = `${newArr[i][0]} - ${newArr[i][newArr[i].length-1]}`
      resArr.push(str)
    }else{
      resArr.push(newArr[i][0]);
    }
  }
  return resArr
}

const arr1 = [2, 3, 1,4, 6, 8, 9, 8,10];
console.log(formatarr(arr1))