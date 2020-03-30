"""
# Definition for a Node.fa
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if not root:
            return 0
        depth = 0
        queue = []
        queue.append(root)
        while(queue):
            l = len(queue)
            for i in range(l):
                node = queue.pop(0)
                for child in node.children:
                    queue.append(child)
            depth += 1
        print(depth)
        return depth