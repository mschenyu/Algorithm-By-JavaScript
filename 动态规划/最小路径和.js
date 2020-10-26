// lc 64: 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。 说明：每次只能向下或者向右移动一步。
/**
 * 1.状态定义：dp[i][j]，表示走到[i,j]位置处的最小路径和
 * 2.状态转移方程：dp[i][j] = min(dp[i-1][j]+arr[i][j], dp[i][j-1]+arr[i][j])
 * 3.初始化状态：dp[0][0] = arr[0][0]
 * 优化：直接在grid上改，不使用额外空间 
 * 空间复杂度O(1) 时间复杂度 O(m * n)
 */
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  for(let i=0; i<m; i++){
      for(let j=0; j<n; j++){
          if(i==0 && j==0){
              continue
          }else if(i==0 && j!=0){
              grid[i][j] = grid[i][j-1] + grid[i][j]
          }else if(i!=0 && j==0){
              grid[i][j] = grid[i-1][j] + grid[i][j]
          }else{
              grid[i][j] = Math.min(grid[i][j-1], grid[i-1][j]) + grid[i][j]
          }
      }
  }
  return grid[m-1][n-1]
};