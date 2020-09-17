function quicksort(array,left,right){
  left = left || 0,
  right = right || array.length-1;
  if(left < right){
    let i = left - 1;
    for(let j=left; j<=right; j++){
      if(array[j]<=array[right]){
        i++;
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
    quicksort(array,left,i-1);
    quicksort(array,i+1,right)
  }
  return array;
}

const arr = [15,12,3,2,7]
console.log(quicksort(arr));