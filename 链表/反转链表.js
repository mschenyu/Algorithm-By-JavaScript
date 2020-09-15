/**
 * 反转一个单链表。
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 // 迭代法，把头拿出来，一个一个往头前面插
 var reverseList = function(head){
   // 初始化
   let pre = null;
   let curr = head;

   while(curr !== null){
     let next = curr.next; //先存着
     curr.next = pre; //最左边变成下一个
     pre = curr;
     curr = next;
   }
   return pre;
 }

 // 尾递归
 // 思路：将上面的 pre=curr; curr=next; 放在递归里返回
 var reverseList = function(head) {
  const reverse = function(pre, curr){
      if(!curr) return pre;
      let next = curr.next;
      curr.next = pre;
      return reverse(curr, next)
      
  }
  return reverse(null, head);
};

//递归
思路
/**
 * 关键是反转操作
当前节点 head，下一个节点 head.next
head.next.next = head
  此处将原 head.next 指向head，即是反转
head.next = null
  此处将原 head 指向head.next的指针断开
递归
  由编译器函数调用执行栈原理可知
    最先调用的函数会在递归过程中最后被执行，而最后调用的会最先执行
  因此此题，最先返回最后两个节点开始反转操作
    依次从后面两两节点开始反转
 */
var reverseList = function(head) {
  if(!head || !head.next) return head;
  //存储next节点
  let next = head.next;
  let reverseHead = reverseList(next);
  //断掉当前节点的引用
  head.next = null;
  //反转下个节点的引用
  next.next = head;
  return reverseHead;
};

//栈
/**
 * 既然是反转，那么符合栈先进后出的特点
将原节点依次入栈
出栈时，重新构造链表改变指向
同样设置哨兵节点
最后返回哨兵的next即为所求
 */
var reverseList = function(head) {
  let tmp = head;
  let tHead = new ListNode(0);
  let pre = tHead;
  let stack = [];
  while(tmp){
      stack.push(tmp.val);
      tmp = tmp.next;
  }
  while(stack.length != 0){
      pre.next = new ListNode(stack.pop());
      pre = pre.next;
  }
  return tHead.next;
};