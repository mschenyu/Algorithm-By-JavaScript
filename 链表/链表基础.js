// 链表的劣势：无法高效获取长度，无法快速访问元素
// 经常碰见诸如获取倒数第k个元素，获取中间位置的元素，判断链表是否存在环，判断环的长度等和长度与位置有关的问题。这些问题都可以通过灵活运用双指针来解决。

// 1.获取链表倒数第k个元素
/**
 * 双指针：
 * 设有两个指针p和q，让p先移动k个节点，然后p和q同时移动，p和q之间始终相差k个元素，直到p指向null时，q所指的元素就是倒数第k个元素
 */
var getKthFromEnd = function(head, k) {
  let p = head, q = head;
  while(k--){
      p = p.next
  }
  while(p!=null){
      p = p.next
      q = q.next
  }
  return q;
};

// 2.获取链表的中间节点
/**
 * 双指针：
 * 设有两个指针fast和slow，两个指针同时从头部开始走，fast一次走两步，slow一次走一步，判断当fast的下一步为空时，slow刚好在中间位置；如果是奇数个元素，slow刚好在最中间；如果是偶数个元素，slow在中间两个元素靠左边的那个
 * 如果想要偶数时slow为靠右的元素，可以像下面这样判断：
 */
var middleNode = function(head) {
  let fast = head, slow = head;
  while(fast != null && fast.next != null){
      fast = fast.next.next
      slow = slow.next
  }
  return slow
};

// 3.判断链表是否有环
/**
 * 快慢指针：
 * 设有两个指针fast和slow，两个指针同时从头部开始走，fast一次走两步，slow一次走一步，如果有环，快慢总会相遇，如果没环，快指针就会先走到null
 * 当一个链表有环时，快慢指针都会陷入环中进行无限次移动，然后变成了追及问题。想象一下在操场跑步的场景，只要一直跑下去，快的总会追上慢的。当两个指针都进入环后，每轮移动使得慢指针到快指针的距离增加一，同时快指针到慢指针的距离也减少一，只要一直移动下去，快指针总会追上慢指针。
 */
var hasCycle = function(head) {
  let fast = head, slow = head;
  while(fast!=null){
      fast = fast.next
      if(fast!=null){
          fast = fast.next
      }
      if(fast == slow){
          return true
      }
      slow = slow.next
  }
  return false
};