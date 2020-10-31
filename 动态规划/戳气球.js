/**
 * 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。如果你戳破气球 i ，就可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。

求所能获得硬币的最大数量。
 */

 /**
  * 思路： 动态规划

1.状态定义：dp[i][j] 表示戳破气球 i 和气球 j 之间（开区间，不包括 i 和 j）的所有气球之后可以获得的最大硬币数量。为了让所有的气球都被戳到，且戳破最后一个气球的时候能顺利计算三个值的乘积，我们往数组前后再各加一项，值为 1，那么我们要求的就是 dp[0][n+1]
2.状态转移方程：对于 dp[i][j]，假设最后一步戳 k 能获取到最优解，则 dp[i][j] = dp[i][k] + dp[k][j] + points[i] * points[j] * points[k]；那么，怎么找到 k，使得最后一步戳 k 比戳其他气球获得的硬币更多呢？很简单，遍历一遍 [i, j] 区间内的所有气球，谁算出来的结果最大，谁就是 k。
综上，状态转移方程可以表述为：
for (int k = i + 1; k < j; k++) {
    // 择优做选择，使得 dp[i][j] 最大
    dp[i][j] = Math.max(
        dp[i][j], 
        dp[i][k] + dp[k][j] + points[i]*points[j]*points[k]
    );
}
3.初始化状态：当 i == j 时，很明显两个之间没有气球，所以 dp 二维数组对角线上都为 0；我们要求的是 j>i 的情况，也就是对角线上方。
4.注意遍历方向：由于对任一 dp[i][j]，我们希望所有 dp[i][k] 和 dp[k][j] 都已经被计算，因为 i < k < j ， 所以 dp[i][k] 和 dp[k][j] 的位置在 dp[i][j] 的左边和下边，所以遍历的时候应该从下往上，从左往右

  */
 var maxCoins = function(nums) {
  const n = nums.length;
  const points = [1, ...nums, 1];
  // 初始化dp数组
  dp = Array.from(new Array(n+2), () => new Array(n+2).fill(0))

  // 开始状态转移
  // i应该从下往上, 【最右下角那个i==j==n+1，是对角线上一点 应该为0，所以这块从n开始遍历（倒数第二行）】
  for(let i=n; i>=0; i--){
      // j 应该从左往右
      for(j=i+1; j<n+2; j++){
          // 寻找最后一个被戳破的气球 k
          for(let k=i+1; k<j; k++){
              // 择优做选择
              dp[i][j] = Math.max(
                  dp[i][j], 
                  dp[i][k] + dp[k][j] + points[i]*points[j]*points[k]
              );
          }
      }
  }
  return dp[0][n + 1];
};

/**
 * 方法二：回溯算法 时间复杂度很高
 * 穷举所有戳气球的顺序，不同的戳气球顺序可能得到不同数量的硬币，然后对比得出最大值。
 */
var maxCoins = function(nums) {
  let res = Number.MIN_VALUE;
  backtrack(nums, 0);
  return res;

  function backtrack(nums, coins){
      // 递归终止条件
      if(nums.length<=0){
          res = Math.max(res, coins);
          return;
      }

      for(let i=0, n=nums.length; i<n; i++){
          const point = 
              (i - 1 < 0 ? 1 : nums[i - 1]) *
              nums[i] *
              (i + 1 >= n ? 1 : nums[i + 1]);

          // 暂存住状态，后面要回溯
          const temp = [...nums];

          // 删除nums[i]
          nums.splice(i, 1);

          // 记忆化递归，继续往下走
          backtrack(nums, coins + point);

          // 回溯（撤销本次选择，尝试别的选择）
          nums = temp;
      }
  }
};