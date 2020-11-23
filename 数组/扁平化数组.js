// const res = []
function fn(arr, res){
  arr.forEach(item => {
    if(Array.isArray(item)){
      fn(item, res)
    }else{
      res.push(item)
    }
  })
  return res
}

const res =fn([1,2,[3,[4]],5], [])
console.log(res)