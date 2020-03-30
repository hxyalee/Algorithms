/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let pointA = headA;
    let pointB = headB;
    let a = true;
    let b = true;
    while(pointA != null && pointB != null){
        if(pointA == pointB){
            return pointA;
        }
        pointA = pointA.next;
        pointB = pointB.next;
        if(pointA == null && a){
            pointA = headB;
            a = false;
        }
        if(pointB == null && b){
            pointB = headA;
            b = false;
        }
    }
    return null;
    
};