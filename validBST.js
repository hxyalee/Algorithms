var isValidBSTRec = function(root){
    let helper = (node, lo, hi) => {
        if(node == null){
            return true;
        }
        if(node.val <= lo || node.val >= hi){
            return false;
        }
        if(!helper(node.left, lo, node.val))
            return false;
        
        if(!helper(node.right, node.val, hi))
            return false;
        
        return true;
    }
    return helper(root, -2147483649, 2147483648)
}
