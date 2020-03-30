    def removeDuplicates(self, S: str) -> str:
        stack = []
        l = len(S)
        for x in range(l):
            if stack and S[x] == stack[-1]:
                stack.pop()
                
            else:
                stack.append(S[x])
        return ''.join(stack)