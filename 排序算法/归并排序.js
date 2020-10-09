/**
 * 归并排序：先把数组从中间分为前后两部分，对前后两部分分别排序，然后借助额外空间，合并两个有序数组，得到更长的有序数组。
 * 算法思想：分治思想，分而治之，将大问题分解成小的子问题来解决，小的子问题解决了，大问题也就解决了。分治算法一般都是用递归来实现的，分治是一种解决问题的处理思想，递归是一种编程技巧，这两者并不冲突。
 * 「归并排序」是理解「递归思想」的非常好的学习材料，大家可以通过理解：递归完成以后，合并两个有序数组的这一步骤，想清楚程序的执行流程。即「递归函数执行完成以后，我们还可以做点事情」。
 */
var sortArray = function(nums) {
  const INSERTION_SORT_THRESHOLD = 7;

  mergeSort(nums, 0, nums.length-1);
  return nums;
  
  // 对数组 nums 的子区间 [left, right] 进行归并排序
  function mergeSort(nums, left, right, temp = []){
      // 小区间使用插入排序
      if(right - left <= INSERTION_SORT_THRESHOLD){
          insertSort(nums, left, right);
          return;
      }

      // let mid = left + right >>> 1;
      let mid = left + Math.floor((right-left) / 2);

      // 递归左边和右边, 使左右两边分别有序
      mergeSort(nums, left, mid, temp);
      mergeSort(nums, mid+1, right, temp);
      
      // 如果数组的这个子区间本身有序，无需合并
      if (nums[mid] <= nums[mid + 1]) {
          return;
      }

      mergeTwoSortedArray(nums, left, mid, right, temp);
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

  // 合并两个有序数组：先把值复制到临时数组，再合并回去
  function mergeTwoSortedArray(nums, left, mid, right, temp){
      temp = [...nums];

      let i = left;
      let j = mid+1;
      for(let k=left; k<=right; k++){
          if(i === mid+1){ //i走到了中间，说明左边已经放完了，之后只需循环把右边放进去
              nums[k] = temp[j];
              j++;
          }else if(j === right+1){ //j走到了最后，说明右边已经放完了，之后只需循环把左边放进去
              nums[k] = temp[i];
              i++;
          }else if(temp[i] <= temp[j]){ // 比较i，j位置的元素，谁小放谁进去，并让其指针右移
             // 注意写成 < 就丢失了稳定性（相同元素原来靠前的排序以后依然靠前）
              nums[k] = temp[i];
              i++;
          }else{
              nums[k] = temp[j];
              j++;
          }
      }
  }  
};