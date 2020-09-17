function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length-1);
  function _mergeSort(arr, l, r) {
    if(l >= r) {
      return;
    }
    let mid = l+Math.floor((r-l)/2);
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid + 1, r);
     _merge(arr, l, mid, r);
  }
  
  function _merge(arr, l, mid, r) {
    let aux = arr.slice(l, r+1), i =l, j = mid + 1;
    for( let k = l ; k <= r; k ++ ){
      if( i > mid ){
        arr[k] = aux[j-l];
        j++;
      } else if( j > r ) {
        arr[k] = aux[i-l];
        i++;
      } else if( aux[i-l] < aux[j-l] ) {
        arr[k] = aux[i-l];
        i++;
      } else {
        arr[k] = aux[j-l];
        j++;
      }
    }
  }
  return arr;
}



const arr = [4,5,6,1,3,2];
console.log(mergeSort(arr))