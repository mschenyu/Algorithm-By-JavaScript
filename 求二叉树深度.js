// DFS 递归
// 后序遍历，先计算出左右子节点的深度，当前节点的深度 = max(左子节点深度， 右子节点深度) + 1 
function maxDepth(root) {
  if(!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// BFS 队列
// 一层一层遍历，每换一层计数器加1,知道当前层为空
function maxDepth(root){
  if(!root) return 0;
  let res = 0;
  let queue = [root], tmp = [];
  while(queue.length){
    root.left && tmp.push(root.left);
    root.right && tmp.push(root.right);
    queue = tmp;
    tmp = [];
    res++;
  }
  return res;
}

