function fn(arr, res){
  arr.forEach(item => {
    if(typeof item === 'object'){
      fn(arr, res)
    }else{
      console.log(res)
      res.push(item)
    }
  })
  return res;
}

const arr = fn([1,2,[3,[4]],5], [])
console.log(arr)