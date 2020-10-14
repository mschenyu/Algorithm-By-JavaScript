// leetcode 617 合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

/**
 * DFS:
 * 同时递归遍历t1和t2，如果其中有一个为null，就直接返回另一个，否则就将当前的两个值加起来赋给t1
 */
var mergeTrees = function(t1, t2) {
  if(t1 == null || t2 == null){
      return t1 == null? t2 : t1;
  }
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};

/**
 * BFS:
 * 申请一个队列
 * 如果两棵树的左节点都不为null，就把它们放入队列中；同理如果两棵树的右节点都不为null，就把它们放入队列中
 * 然后不断的从队列中取出两个节点，把他们相加，赋给t1
 * 如果有任一树的左/右节点为null，直接赋值
 */
var mergeTrees = function(t1, t2) {
  if(t1 == null || t2 == null){
      return t1 == null? t2 : t1;
  }
  let queue = [t1, t2];
  while(queue.length){
    let curRight = queue.pop();
    let curLeft = queue.pop();
    curLeft.val += curRight.val;
    if(curLeft.left == null || curRight.left == null){
      curLeft.left = curLeft.left == null? curRight.left : curLeft.left;
    }else{
      queue.unshift(curLeft.left, curRight.left)
    }
    if(curLeft.right == null || curRight.right == null){
      curLeft.right = curLeft.right == null? curRight.right : curLeft.right;
    }else{
      queue.unshift(curLeft.right, curRight.right)
    }
  }
  return t1;
};