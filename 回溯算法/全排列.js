/**
 * leetcode 46:   
 * 输入: [1,2,3]  
 * 输出: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]  
 */
var permute = function(nums) {
  let len = nums.length, res= [];
  if(!len) return res;

  let used = []; // boolean[]
  let path = []; //number[]
  dfs(nums, len, 0, path, used, res);
  return res;

  function dfs(nums, len, depth, path, used, res){
      if(depth === len) {
          //path是动态数组，不能直接push，需要拷贝一份当前值保存到结果中
          res.push([...path]); 
          return;
      }

      for(let i=0; i<len; i++){
          if(!used[i]){
              path.push(nums[i]);
              used[i] = true;

              // 往下找全排列中的下一个位置
              dfs(nums, len, depth+1, path, used, res);

              // 形成一个全排列后，进行回退，尝试其他答案
              used[i] = false;
              path.pop();
          }
      }
  }

};