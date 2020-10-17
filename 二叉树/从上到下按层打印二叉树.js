// 剑指offer 32
/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 * 输入： 给定二叉树: [3,9,20,null,null,15,7],
 * 输出： [[3],[9,20],[15,7]]
 */

 /**
  * 思路：BFS
  * 特例处理： 当根节点为空，则返回空列表 [] ；
    初始化： 打印结果列表 res = [] ，包含根节点的队列 queue = [root] ；
    BFS 循环： 当队列 queue 为空时跳出；
        新建一个临时列表 tmp ，用于存储当前层打印结果；
        当前层打印循环： 循环次数为当前层节点数（即队列 queue 长度）；
            出队： 队首元素出队，记为 node；
            打印： 将 node.val 添加至 tmp 尾部；
            添加子节点： 若 node 的左（右）子节点不为空，则将左（右）子节点加入队列 queue ；
        将当前层结果 tmp 添加入 res 。
    返回值： 返回打印结果列表 res 即可。
  */

  //我的代码：有点点丑
  var levelOrder = function(root) {
    const res = [];
    if(!root) return res;
    let queue = [root];
    while(queue.length){
        const temp = [];
        const arr = [...queue];
        queue = [];
        for(let i=0; i<arr.length; i++){
            temp.push(arr[i].val);
            arr[i].left && queue.push(arr[i].left);
            arr[i].right && queue.push(arr[i].right);
        }
        res.push(temp)
    }
    return res;
};

// 别人的代码： 妙啊
var levelOrder = function(root) {
  const res = [];
  if(!root) return res;
  let queue = [root];
  while(queue.length){
      const temp = [];
      for(let i=queue.length; i>0; i--){ 
          const node = queue.pop();
          temp.push(node.val);
          node.left && queue.unshift(node.left);
          node.right && queue.unshift(node.right);
      }
      res.push(temp)
  }
  return res;
};


