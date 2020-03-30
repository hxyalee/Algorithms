# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        if not root:
            return []
        average = []
        queue = []
        
        queue.append(root)
        while queue:
            levelLen = len(queue)
            av = 0
            for x in range(levelLen):
                node = queue.pop(0)
                av += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            av = av / levelLen
            average.append(av)
        return average