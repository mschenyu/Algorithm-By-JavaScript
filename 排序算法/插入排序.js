function insertionSort(arr){
  const len = arr.length;
  if(len<=1) return;
  for(let i=1; i<len; i++){
    const currentVal = arr[i];
    let j = i-1;
    // 查找插入的位置
    for(; j>=0; j--){
      if(arr[j] > currentVal){
        arr[j+1] = arr[j]  // 移动数据
      }else{
        break;
      }
    }
    arr[j+1] = currentVal; // 插入数据
  }
  return arr;
}

const arr = [4,5,6,1,3,3,2];
console.log(insertionSort(arr))