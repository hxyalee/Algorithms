 def findDuplicates(self, nums: List[int]) -> List[int]:
        r = []

        for x in nums:
            if nums[abs(x) - 1] < 0:
                r.append(abs(x))
            else:
                nums[abs(x) - 1] *= -1
        print(nums)
        return (r)