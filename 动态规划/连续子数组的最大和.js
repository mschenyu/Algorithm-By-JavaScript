// lc 42 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
/**
 * 动态规划
 * 1.状态定义：dp[i]表示以nums[i]结尾的子数组的最大和
 * 2.状态转移方程：dp[i]= Math.max(dp[i-1]+nums[i], nums[i])
 * 3.初始化状态：dp[0]=nums[0]
 */
var maxSubArray = function(nums) {
  const dp = [nums[0]]

  for(let i=1, len=nums.length; i<len; i++){
      dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
  }

  return Math.max(...dp)
};