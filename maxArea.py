class Solution:
    def maxArea(self, height: List[int]) -> int:
        if not height:
            return 0
        i = 0
        j = len(height) - 1
        v = 0
        while i < j:
            h = min(height[i], height[j])
            v = max(v, h * (j - i))
            if(height[i] < height[j]):
                i += 1
            else:
                j -= 1
        return v