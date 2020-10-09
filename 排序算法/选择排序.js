/**
 * 选择排序：每一轮选取未排定的部分中最小的元素交换到已排定部分的末尾（未排定部分的开头），经过若干个步骤，就能排定整个数组。即：先选出最小的，再选出第 2 小的，以此类推。
 */
var sortArray = function(nums) {
  const len = nums.length;
  // [0, i) 有序，且该区间里所有元素就是最终排定的样子
  for(let i=0; i<len-1; i++){
      let minIndex = i;
      // 从未排序区间找出最小值, 交换到下标i
      for(let j=i+1; j<len; j++){
          if(nums[j]<nums[minIndex]){
              minIndex = j;
          }
      }
      swap(nums, i, minIndex);
  }
  return nums;

  function swap(nums, index1, index2){
      const temp = nums[index2];
      nums[index2] = nums[index1];
      nums[index1] = temp;
  }
};