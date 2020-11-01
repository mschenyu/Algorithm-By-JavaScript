// leetcode 120 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

/**
 * 方法一：递归 穷举所有的路径，比较得出最小值
 * 时间复杂度 O(2^n)
 */
var minimumTotal = function(triangle) {
  let res = Number.MAX_VALUE;
  dfs(0,0,0)
  return res;
  function dfs(i,j, sum){
      // 递归终止条件
      if(!triangle[i]){
          res = Math.min(res, sum);
          return;
      }
      dfs(i+1, j, sum+triangle[i][j])
      dfs(i+1, j+1, sum+triangle[i][j])
  }
};

/**
 * 方法二：动态规划 自底向上
 * 1.状态定义：dp[i][j]表示 从底部到[i,j]位置处的最小路径和，则我们要求的就是dp[0][0]
 * 2.状态转移方程：dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
 * 3.初始值：dp[n-1][j] = triangle[m-1][j]
 */
var minimumTotal = function(triangle) {
  const n = triangle.length
  let dp = Array.from(new Array(n), () => new Array(n).fill(0))
  
  for(let i=n-1; i>=0; i--){
      for(let j=i; j>=0; j--){
          if(i === n-1){
              dp[i][j] = triangle[i][j]
          }else{
              dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
          }
      }
  }
  return dp[0][0]
};

// dp只需要一个一维数组即可，因为每次只要下面一层
var minimumTotal = function(triangle) {
  const n = triangle.length
  let dp = triangle[n-1] //最后一行
  
  for(let i=n-2; i>=0; i--){
      for(let j=0; j<=i; j++){
          dp[j] =  Math.min(dp[j], dp[j+1]) + triangle[i][j]
      }
  }
  return dp[0]
};
 
