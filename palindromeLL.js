/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head == undefined) return true;
    let slow = head;
    let fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    };
    
    fast = head;
    slow = reverse(slow);
    while (slow != null) {
      if (slow.val != fast.val){
          return false;
      }
        slow = slow.next;
        fast = fast.next;
    };
    return true;    
};

var reverse = function(lst) {
    let prev = null;
    let curr = lst;
    let next;
    while(curr != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}