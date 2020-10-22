/**
 * lc:111 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。
 */

 /**
 * 注意：题目说叶子节点是指没有子节点的节点，所以[1, 2]测试用例不能返回1，而应该返回2
 * 总的来说，有三种情况：
 * 1.当根节点没有左右子节点时返回1
 * 2.当根节点左右子节点有一个是null时，返回另一个子树的最小深度
 * 3.当根节点左右子树都有值时，返回左右子树比较后的最小深度
 */
var minDepth = function(root) {
  if(!root) return 0;
  if(!root.left && !root.right){
      return 1
  }else if(!root.left || !root.right){
      return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
  }else{
      return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }
};