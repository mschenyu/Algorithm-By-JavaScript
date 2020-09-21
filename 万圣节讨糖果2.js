// 使用嵌套循环生成滑动窗口，每次对以i开头的连续n个值使用魔法，再加上其他未使用魔法的值，算出的和与max比较，返回max
// [7,4,3,1,9,7,99,6],[1,1,1,0,0,0,0,0],3 
function getMaxSum(candies, coins, n){
  let max=0;
  for(let i=0, len=candies.length; i<len; i++){
    let j=0, res=0, count=n;
    // 窗口左侧的硬币正面对应的糖果之和
    while(j<i){
      if(coins[j] === 0) res += candies[j];
      j++;
    }
    // 窗口中所有项之和
    while(j<len && count>0){
      res+=candies[j++];
      count--;
    }
    // 窗口右侧的硬币正面对应的糖果之和
    while(j<len){
      if(coins[j] === 0) res += candies[j];
      j++;
    }
    max = Math.max(max, res)
  }
  return max;
}
console.log(getMaxSum([7,4,3,1,9,7,99,6],[1,1,1,0,0,0,0,0],3)) 