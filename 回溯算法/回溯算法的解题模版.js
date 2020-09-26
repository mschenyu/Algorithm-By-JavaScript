function backtrack(){
  let res = [];
  let used = [];

  function dfs(depth, path){ // depth表示当前所在的阶段
    // 递归终止条件
    if(depth === len){
      res.push(path);
      return;
    }

    // 针对当前depth尝试所有可能的结果
    for(let i=0; i<len; i++){
      if(!used[i]){ // 此路不通的标记
        path.push(nums[i]);
        used[i] = true;

        // depth+1 前往下一个阶段
        dfs(depth+1, path);

        // 重置本阶段状态，尝试本阶段的其他可能
        used[i] = false;
        path.pop();
      }
    }
  }
}