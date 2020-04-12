var insertIntoBST = function(root, val) {
    if(root == null) return;
    
    if(root.left == null && root.val >val){
        root.left = new TreeNode(val)
    }
    if(root.right == null && root.val < val){
        root.right = new TreeNode(val)
    }
    
    if(root.val > val){
        insertIntoBST(root.left, val)
    }
    if(root.val < val){
        insertIntoBST(root.right, val)
    }
    return root
};