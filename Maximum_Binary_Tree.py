class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:
        
        if not nums:
            return
        maxVal = max(nums)
        maxIndex = nums.index(maxVal)
        left = nums[:maxIndex]
        right = nums[maxIndex + 1:]
        node = TreeNode(maxVal)
        
        if len(left):
            node.left = self.constructMaximumBinaryTree(left)
        if len(right):
            node.right = self.constructMaximumBinaryTree(right)
        
        retu