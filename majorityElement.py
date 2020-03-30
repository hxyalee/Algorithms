# Worst case O(n log n)
def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        return nums[len(nums)//2]
# Expected O(n)
def majorityElement(self, nums: List[int]) -> int:
        d = dict()
        for x in nums:
            if x not in d:
                d[x] = 1
            else:
                d[x] += 1
        maxc  = maxd = 0
        print(d)
        for key in d:
            if maxc < d[key]:
                maxc = d[key]
                maxd = key
                
        return maxd