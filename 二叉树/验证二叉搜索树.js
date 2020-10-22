// 二叉搜索树的一个特征：中序遍历后得到一个升序数组

// 基础版：先中序遍历，然后验证其是否为升序
var isValidBST = function(root) {
  if(root === null) return true;
  const temp = [];
  dfs(root)
  function dfs(root){
      root.left && dfs(root.left);
      temp.push(root.val);
      root.right && dfs(root.right);
  }

  for(let i=1; i<temp.length; i++){
      if(temp[i]<=temp[i-1]){
          return false
      }
  }
  return true
};

/**
 * 更简洁版：
 * 在中序遍历的时候直接与前一个值比较
 */
var isValidBST = function(root) {
  let pre = -Infinity;
  return dfs(root);
  function dfs(root){
      if(root === null) return true;
      // 访问左子树
      if(!dfs(root.left)){
          return false;
      }
      // 访问当前节点
      if(root.val <= pre){
          return false;
      }
      pre = root.val;

      // 访问右子树
      return dfs(root.right);
  }
  
};