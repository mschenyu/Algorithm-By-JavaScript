/**
 * 题目描述：有一个数组的饼干（数组中的值代表饼干的尺寸），还有一个数组的小孩的胃口，问最多能满足多少个小孩的胃口
 * 
 * 思路：贪心算法，对于每一个饼干，尽可能去满足能满足的胃口大的小孩
 * 用两个指针同时遍历两个排序数组
 */
function splitCookie(childs, cookies){
  childs.sort((a,b) => a-b);
  cookies.sort((a,b) => a-b);
  let child = 0, cookie = 0;
  while(child<childs.length && cookie<cookies.length){
    if(childs[child] <= cookies[cookie]){
      child ++;
    }
    cookie++;
  }
  return child;
}

console.log(splitCookie([10,9,8,7,6,1], [1,1]))