/**
 * 1.快排思想
 * 因为题目说以任意顺序返回这k个数均可，所以可以利用快排的分区思想，分到下标为k-1的时候就可以停止排序了，此时arr[k-1]的左边虽然是乱序的，但一定都比arr[k-1]小，数组的最小前k个数就是arr[0]到arr[k-1]
 * 并且在递归分区的时候可以利用二分法思想，根据当前基准值下标与k的大小关系来决定继续切分左段还是右段。时间复杂度可以砍掉一半
 * 复杂度：
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)，用常数个指针 原地排序 
 */
var getLeastNumbers = function(arr, k) {
  if (k == 0 || arr.length == 0) {
      return [];
  }
  return quickSearch(arr, 0, arr.length-1, k-1)

  function quickSearch(arr, left, right, k){
    const pIndex = partition(arr, left, right);
    if(pIndex === k){
      return arr.slice(0, k+1)
    }
    return pIndex > k ? quickSearch(arr, left, pIndex-1, k) : quickSearch(arr, pIndex+1, right, k);
  }

  function partition(arr, left, right){
    // 取中间值作为基准值，防止极端测试用例（顺序/逆序数组）使快排复杂度退化到最坏情况
    let mid = left + Math.floor((right - left) / 2);
    swap(arr, left, mid);
    const pivot = arr[left];
    let pIndex = left; // 开拓小于基准值的区间的指针
    for(let i=left+1; i<=right; i++){
      if(arr[i]<pivot){
        pIndex++;
        swap(arr, i, pIndex)
      }
    }
    swap(arr, left, pIndex);
    return pIndex;

    function swap(arr, index1, index2){
      const temp = arr[index2];
      arr[index2] = arr[index1];
      arr[index1] = temp;
    }
  }
};