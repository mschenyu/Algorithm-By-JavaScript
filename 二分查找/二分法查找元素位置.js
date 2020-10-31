// 给定一个排序数组和一个数字，找出这个数字在数组中的位置，如果没找到则返回应该插入的位置（顺序）
// 二分查找：设置两个指针left（数组开头）和right（数组结尾），找到中间的值与给定值比较，如果中间值大于给定值，就让right移到刚才的中间位置 
//复杂度： O(logn)
const searchInsert = function(nums, target) {
  let left = 0, right = nums.length -1;
  while(left<=right){
    const mid = (left + right) >> 1; //取中间位置
    if(nums[mid] === target) return mid;
    if(nums[mid] < target) {
      left = mid+1;
    }else{
      right = mid -1;
    }
  }
  return left; // 退出循环时，right 比 left 小 1
}
searchInsert([1,3,5,6], 2)