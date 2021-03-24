const getSum = function(nums, sum){
  let res = [], path=[];

  dfs(nums, 0, sum, path, res)
  return res;


  function dfs(nums, begin, target, path, res){
    if(target < 0) return;
    if(target == 0){
      res.push([...path]);
      return;
    }

    for(let i=begin; i< nums.length; i++){
      path.push(nums[i]);

      dfs(nums, i, target-nums[i], path, res);

      path.pop()
    }
  }
}

console.log(getSum([2,3,6,7], 7))