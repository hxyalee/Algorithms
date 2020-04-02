// use of hash set
// O(N) space 
var hasCycleSet = function(head) {
    let hs = new Set();
    let curr = head;
    while(curr != null){
        if(hs.has(curr)){
            return true
        } else{
            hs.add(curr)
        }
        curr = curr.next;
    }
    return false;
};

// Two pointers
// pointerrs will meet eventually
var hasCycle = (head) => {
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow == fast){
            return true
        }
    }
    return false;
}