function mergeSort(arr){
  merge_sort_C(arr, 0, arr.length-1)

  // 递归调用函数
  function merge_sort_C(A, p, r){
    if(p>=r) return;  //终止条件
    // 取p到r的中间位置q
    const q = p + Math.floor((r-p) / 2);

    //分治递归
    merge_sort_C(A, p, q);
    merge_sort_C(A,q+1,r);

    // 将A[p...q]和A[q+1...r]合并为A[p...r]
    merge(A,p,q,r)
  }

  function merge(A,p,q,r){
    let i=p, j=q+1, k=0; // 初始化变量 i,j,k
    let tmp = [];
    while(i<=q && j<=r){
      if(A[i]<=A[j]){
        tmp[k++] = A[i++]
      }else{
        tmp[k++] = A[j++]
      }
    }

    // 判断哪个子数组中有剩余的数据
    let start = i, end = q;
    if(j<=r){
      start = j;
      end = r;
    }

    // 将剩余的数据拷贝到临时数组
    while(start<=end){
      tmp[k++] = A[start++]
    }

    // 将tmp数组拷贝回A
    for(let i=0;i<=r-p;i++){
      debugger
      A[p+i] = tmp[i]
    }
  }

  return arr;

}

const arr = [6,5,4,1,3,2];
// mergeSort(arr)
console.log(mergeSort(arr))