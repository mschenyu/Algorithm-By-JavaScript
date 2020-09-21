// 使用队列生成一个滑动窗口，遍历所有连续的n个值的组合，找出和最大的
// [7,4,3,1,9,7,10,6],[1,0,1,0,1,0,1,0],3 输出37
// 该方法有问题，没有考虑硬币数组的随机性，
function getMaxSum(candies, coin, n){
  let queue = [], max = 0, maxIndex = 0, index = 0;
  for(let i=0; i<n; i++){
    queue.push(candies[i])
  }
  // 找出和最大的连续n项的起始索引
  while(queue.length === n){
    const sum = eval(queue.join('+'));
    if(sum>max){
      max = sum;
      maxIndex = candies.indexOf(queue[0])
    }
    if(candies[index+n]){
      queue.push(candies[index+n]);
    }
    queue.shift();
    index++;
  }
  for(let i=0; i<n; i++){
    coin[maxIndex+i] = 0;
  }
  return coin.reduce((acc,curr,index) => {
    const ret = curr === 0 ? candies[index] : 0;
    return acc + ret;
  }, 0)
}
console.log(getMaxSum([7,4,3,1,9,7,99,6],[1,1,1,0,0,0,0,0],3)) 