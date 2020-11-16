function getMax(len, arr){
  arr = arr.split(' ').map(val => +val)
  const maxArr = [];
  let res = Number.MIN_VALUE;
  for(let i=0; i<arr.length; i++){
      maxArr[i] = arr[i] * maxSum(i, arr);
      res = Math.max(res, maxArr[i])
  }
  return res;
  
  function maxSum(index, arr){
      const resArr = [arr[index]]
      for(let i=index+1; i<arr.length;i++){
          if(arr[i]>arr[index]){
            resArr.push(arr[i])
              continue;
          }
          break;
      }
      if(index>0){
          for(let i=index-1; i>=0; i--){
              if(arr[i]>arr[index]){
                resArr.push(arr[i])
                  continue;
              }
              break;
          }
      }
      const  res =  resArr.reduce((sum,cur) => sum + cur);
      return res;
  }
}

const test = getMax(10, '81 87 47 59 81 18 25 40 56 0')
console.log(test)