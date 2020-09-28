/**
 * 动态规划
 * 1.状态定义 dp[i]表示第i个值时能够盗窃到的最高金额
 * 2.状态转移方程：dp[i] = max(dp[i-1], dp[i-2]+nums[i])
 * 解释：最优子结构：能分解成多个子问题，题目的问题也属于其中一个子问题，每个子问题可以由其他子问题推导出来
 * 对于第i个值，有两种选择，选择不偷，或选择偷；如果不偷，那么问题就变成了前i-1个值中最大值，即dp[i-1]，如果选择偷，那么第i-1个值显然不能用，前i-2个值不受影响，那么问题就变成了nums[i]+dp[i-2]
 */
var rob = function(nums) {
  let len = nums.length;
  if(len ==0) return 0;
  if(len == 1) return nums[0];

  let dp = [nums[0]];
  dp[1] = Math.max(nums[0], nums[1])
  for(let i=2; i<len; i++){
      dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
  }
  return dp[len-1]
};