/**
 * 快速排序：快速排序每一次都排定一个元素（这个元素呆在了它最终应该呆的位置），然后递归地去排它左边的部分和右边的部分，依次进行下去，直到数组有序；
 * 基本快速排序
 */
var sortArray = function(nums) {
  const INSERTION_SORT_THRESHOLD = 7;

  quickSort(nums, 0, nums.length-1)
  return nums;

  function quickSort(nums, left, right){
      // 小区间使用插入排序
      // if(right - left <= INSERTION_SORT_THRESHOLD){
      //     insertSort(nums, left, right);
      //     return;
      // }
      if(left>=right) return;

      // 将nums分区，使得nums[pIndex]左边的都小于nums[pIndex], 右边的都大于nums[pIndex]
      let pIndex = partition(nums, left, right);

      // 对基准值左右两边递归的分区（排序）
      quickSort(nums, left, pIndex-1);
      quickSort(nums, pIndex+1, right);

  }

  // 对数组 nums 的子区间 [left, right] 使用插入排序
  function insertSort(nums, left, right){
      for(let i=left+1; i<=right; i++){
          const currentVal = nums[i];
          let j = i;
          while(j>left && nums[j-1] > currentVal ){
              nums[j] = nums[j-1];
              j--;
          }
          nums[j] = currentVal;
      }
      return nums;
  }

  // 分区函数
  function partition(nums, left, right){
      // 取中间的值作为基准值
      let mid = left + Math.floor((right-left) / 2);
      swap(nums, left, mid); // 把基准值交换到第一项

      // 基准值
      let pivot = nums[left];
      let lt = left; // 开拓小于基准值的区间的指针
      // 循环不变量：
      // all in [left + 1, lt] < pivot
      // all in [lt + 1, i) >= pivot
      for(let i=left+1; i<=right; i++){
          if(nums[i]<pivot){
              lt++;
              swap(nums, i, lt)
          }
      }
      swap(nums, left, lt); //将基准值换到中间
      return lt;
  }

  function swap(nums, index1, index2){
      const temp = nums[index2];
      nums[index2] = nums[index1];
      nums[index1] = temp;
  }
};
