// leetcode 226
// 思路：遍历所有节点，交换其左右子节点
// 方法一 递归--深度优先(前、中、后序遍历都可)
function invertTree(root){ 
  // 前序遍历
  if(!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}


// 方法二 层序遍历--广度优先
function invertTree(root){
  if(!root) return null;
  let queue = [root];
  while(queue.length){
    const currentNode = queue.pop();
    const temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;
    currentNode.left && queue.unshift(currentNode.left);
    currentNode.right && queue.unshift(currentNode.right);
  }
  return root;
}