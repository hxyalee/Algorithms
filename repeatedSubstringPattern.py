class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        l = len(s)
        for i in range(l//2 + 1):
            if i == 0:
                continue
            if s[i:] + s[:i] == s:
                return True
        return False