# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        res = list()
        queue = list()
        queue.append(root)
        res.append([root.val])
        while(queue):
            l = len(queue)
            sub = list()
            for i in range(l):
                node = queue.pop(0)
                if(node.left):
                    queue.append(node.left)
                    sub.append(node.left.val)
                if(node.right):
                    queue.append(node.right)
                    sub.append(node.right.val)
            if(sub):
                res.append(sub)
        return res        