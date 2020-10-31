const testArray = [1,3,2,3,5,3,7,6,7,8,8,8,8];

// 思路：遍历数组，将它的元素赋给对象的key，并初始化它的值为1，如果遇到重复的，值++；
// 用max保存当前最大值

function highestAppear(array){
  let [obj,max,result] = [{},1,''];
  array.forEach(value => {
    if(obj[value]){
      obj[value]++;
      if(obj[value]>max){
        max = obj[value];
        result = value;
      }
    }else{
      obj[value]=1;
    }
  })
  return result;
}

const testResult = highestAppear(testArray);
console.log(testResult)