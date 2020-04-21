# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        
        if not root:
            return 0
        queue = []
        queue.append(root)
        depth = 0
        
        while queue:
            levelLength = len(queue)
            for x in range(levelLength):
                node = queue.pop(0)
                if node.left != None:
                    queue.append(node.left)
                if node.right != None:
                    queue.append(node.right)
            depth += 1
        return depth