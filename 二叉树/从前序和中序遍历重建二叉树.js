/**
 * 前序遍历数组的第一个数（索引为0）的数一定是二叉树的根节点，而这个数在中序遍历数组的中间，将左子树和右子树分为两半
 * 在中序遍历数组中找到这个根节点的索引，然后把前序遍历数组和中序遍历数组分为两部分，就分别对应二叉树的左子树和右子树，分别递归完成
 * 子区间的边界作为递归函数的参数
 * 
 * 优化：在遍历中序遍历数组查找根节点的位置时，如果每次都遍历一次会让时间复杂度增加一个数量级，所以可以采用空间换时间，用map存储中序遍历数组值与索引的的映射关系
 */
var buildTree = function(preorder, inorder) {
  let n = preorder.length;
  // 构造映射表，快速定位根节点
  const indexMap = new Map();
  for(let i=0; i<n; i++){
    indexMap.set(inorder[i], i)
  }

  return myBuildTree(preorder, inorder, 0, n-1, 0, n-1);

  function myBuildTree(preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right){
    // 国际惯例，先来终止条件
    if(preorder_left>preorder_right){
      return null;
    }

    // 先把根节点建立出来
    let root = {
        val: preorder[preorder_left]
    }
    // 前序遍历的第一个节点就是根节点，在中序遍历中定位根节点
    const rootIndex = indexMap.get(root.val);

    // 计算左子树中节点的数量
    const left_subtree_length = rootIndex - inorder_left;
    
    // 递归构造左子树
    // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    root.left = myBuildTree(preorder, inorder, preorder_left+1, preorder_left+left_subtree_length, inorder_left, rootIndex-1);

    //递归构造右子数
    // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
    root.right = myBuildTree(preorder, inorder, preorder_left+left_subtree_length+1, preorder_right, rootIndex+1, inorder_right)

    return root;
  }
};