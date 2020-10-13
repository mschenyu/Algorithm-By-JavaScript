/**
 * 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 */
/**
 * 二叉树的直径是任意两节点间最长间距，可以认为是某一个节点的左右子树高度之和(任意两点之间必有顶点)，所以最长间距就是要找出左右子树高度之和最大的节点
 * 递归:
 * 经典递归求树的高度，因为递归会遍历到所有节点，所以可以在递归体内再做点别的事情：计算其当前节点右子树高度之和，并与最大值比较
 */

var diameterOfBinaryTree = function(root) {
  let max = 0;
  getHeight(root);
  function getHeight(root){
      if(!root) return 0;
      max = Math.max(max, getHeight(root.left) + getHeight(root.right))
      return Math.max(getHeight(root.left), getHeight(root.right))+1
  }

  return max;
};

/**
 * 解法二：
 * 二叉树的最长路径=max{左子树的最长路径,右子树的最长路径,经过根结点的最长路径}
 */

var diameterOfBinaryTree = function(root) {
  if(!root) return 0
  let tempH = height(root.left) + height(root.right)
  return Math.max(tempH, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right) )

  function height(node) { //求树高
      if(!node) return 0
      return  Math.max(height(node.left), height(node.right)) + 1
  }
};

