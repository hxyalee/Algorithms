"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        if not root:
            return
        output = []
        queue = []
        queue.append(root)
        while queue:
            queueLength = len(queue)
            sub = []
            for i in range(queueLength):
                dq = queue.pop(0)
                sub.append(dq.val)
                for child in dq.children:
                    queue.append(child)
            output.append(sub)
            
        print(output)
        return output
        