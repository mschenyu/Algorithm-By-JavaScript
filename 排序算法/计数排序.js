function countingSort(arr){ //eg: [2,5,3,0,2,3,0,3]
  if(arr.length<=1) return;

  // 查找数组中数据的范围 ,max=5
  let max = arr[0];
  for(let i=1;i<arr.length;i++){
    if(max<arr[i]){
      max = arr[i]
    }
  }

  let c = []; //申请一个计数数组c,下标大小[0,max]  [0,5]
  for(let i=0;i<=max;i++){
    c[i]=0;
  }

  //计算每个元素的个数，放入c中 [2,0,2,3,0,1]
  for(let i=0;i<=max;i++){
    c[arr[i]]++;
  }

  //依次累加 变成[2,2,4,7,7,8]
  for(let i=1;i<=max;i++){
    c[i] = c[i-1] + c[i];
  }

  //临时数组r，存储排序之后的结果
  let r = [];
  //计算排序的关键步骤
  for(let i=arr.length-1; i>=0; i--){
    let index = c[arr[i]]-1;
    r[index] = arr[i];
    c[arr[i]]--;
  }

  //将结果拷贝给原数组
  for(let i=0; i<arr.length; i++){
    arr[i] = r[i]
  }

  return arr;
}

const arr = [4,5,6,1,3,2]
console.log(countingSort(arr));