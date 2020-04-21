/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root == null) return root;
    let queue = new Array();
    queue.push(root);
    while(Array.isArray(queue) && queue.length > 0) {
        let queueLen = queue.length;
        let current = [...queue]
        for(let i = 0; i < queueLen; i++){
            let node = queue.shift();
            if(i == queueLen - 1) {
                node.next = null;
            } else {
                node.next = current[i]
            }
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
        }
    }
    return root;
};