// leetcode 152 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

/**
 * 动态规划
 * 错误的思路：
 * 1.状态定义：dp[i]表示包含第i项的乘积最大连续子数组，算出所有dp[i]，对比得出最大值
 * 2.状态转移方程：对于每一个dp[i]，有两种选择，要么和前面的连起来，要么从这个位置的值重新开始，当前的dp[i]就是这两者中较大的一个，所以dp[i] = Math.max(dp[i-1]*nums[i], nums[i])
 * 3.初始化：dp[0] = nums[0]
 * 于是出现了一个问题：如果当前值是个负数，前面的是正数，按照现在的递推公式，肯定是选择nums[i]，但如果下一项还是一个负数，那么上一步的选择就做错了
 * 所以，需要两个dp数组来记录状态，因为当前项的最大值有可能是和上一个的最大值相乘产生（正正），也有可能是和上一个的最小值相乘产生（负负），也有可能是这个数本身（负正）
 * 由于只用到前一项，所以dp不用申请数组，直接用一个变量
 * curMax = Math.max(preMax*nums[i], preMin*nums[i], nums[i]);
 * 因为用到了preMin，所以我们需要记录最小值（负的最大值），以防后面有一个负数，这两个一乘局面就会反转
 */
var maxProduct = function(nums) {
  if(!nums || !nums.length) return 0;
  let res = nums[0];
  let preMax = nums[0];
  let preMin = nums[0];
  for(let i=1; i<nums.length; i++){
      curMax = Math.max(preMax*nums[i], preMin*nums[i], nums[i]);
      curMin = Math.min(preMax*nums[i], preMin*nums[i], nums[i]);
      res = Math.max(res, curMax)
      preMax = curMax;
      preMin = curMin;
  }
  return res;
};