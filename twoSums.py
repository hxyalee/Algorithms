def twoSum(self, nums: List[int], target: int) -> List[int]:
        hs = {}
        l = len(nums)
        for i in range(l):
            tmp = target - nums[i]
            if tmp in hs:
                return [hs[tmp], i]
            hs[nums[i]] = i