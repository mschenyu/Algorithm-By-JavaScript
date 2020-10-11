// 递归，递归的判断left.left = right.right && left.right = right.left
var isSymmetric = function(root) {
  if(root === null) return true;
  return dfs(root.left, root.right)

  function dfs(left, right){
      //递归的终止条件是两个节点都为空
      //或者两个节点中有一个为空
      //或者两个节点的值不相等
      if(left === null && right === null){
          return true;
      }
      if(left === null || right === null){
          return false;
      }
      if(left.val != right.val){
          return false;
      }
      //再递归的比较 左节点的左孩子 和 右节点的右孩子
		  //以及比较  左节点的右孩子 和 右节点的左孩子
      return dfs(left.left, right.right) && dfs(left.right, right.left)
  }
};

// 队列
var isSymmetric = function(root) {
  if(root === null || (root.left===null && root.right === null)){
      return true;
  }
  let queue = [root.left, root.right];
  while(queue.length){
      //从队列中取出两个节点，再比较这两个节点
      const left = queue.pop();
      const right = queue.pop();
      //如果两个节点都为空就继续循环，两者有一个为空就返回false
      if(left === null && right === null){
          continue;
      }
      if(left === null || right === null){
          return false;
      }
      if(left.val !== right.val){
          return false;
      }
      //将左节点的左孩子， 右节点的右孩子放入队列
      queue.unshift(left.left, right.right);
      //将左节点的右孩子，右节点的左孩子放入队列
      queue.unshift(left.right, right.left);
  }
  return true;
};