/**
 * 插入排序: 在接近有序的情况下，表现优异
 * 基本思想：每次将一个数字插入一个有序的数组里，成为一个长度更长的有序数组，有限次操作以后，数组整体有序。初始已排序区间只有一个元素，就是数组的第一个元素。
 * 分析：「插入排序」在「几乎有序」的数组上表现良好，特别地，在「短数组」上的表现也很好。因为「短数组」的特点是：每个元素离它最终排定的位置都不会太远。为此，在小区间内执行排序任务的时候，可以转向使用「插入排序」
 */
var sortArray = function(nums) {
  const len = nums.length;
  // 循环不变量：将 nums[i] 插入到区间 [0, i) 使之成为有序数组
  for(let i=1; i<len; i++){
      // 先暂存这个元素，然后之前元素逐个后移，留出空位
      const currentVal = nums[i];
      let j = i;
      // 注意边界 j > 0
      while(j>0 && nums[j-1] > currentVal ){
          nums[j] = nums[j-1];
          j--;
      }
      nums[j] = currentVal;
  }
  return nums;
};