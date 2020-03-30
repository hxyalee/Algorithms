var minDepth = function(root) {
    let depth = 0
    if(root == null) {
        return depth;
    }
    let queue = [];
    queue.push(root);
    while(Array.isArray(queue) && queue.length > 0){
        let l = queue.length;
        depth += 1
        for(let i = 0; i < l; i++) {
            node = queue.shift();
            if(node.left == null && node.right == null) {
                return depth
            }
            if(node.left != null) {
                queue.push(node.left);
            } if(node.right != null) {
                queue.push(node.right);
            }
        }
    }
    
};