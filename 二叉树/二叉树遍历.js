const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

//前序遍历
const preOrder = function(root){
  if(!root) return;
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right)
}
// preOrder(tree)

//中序遍历
const inOrder = function(root){
  if(!root) return;
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}
// inOrder(tree)

//后序遍历
const postOrder = function(root){
  if(!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value)
}
postOrder(tree)