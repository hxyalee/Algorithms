class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        if not rooms:
            return False
        seen = set()
        seen.add(0)
        stack = [0]
        
        while stack:
            node = stack.pop()
            for rm in rooms[node]:
                if rm not in seen:
                    seen.add(rm)
                    stack.append(rm)
        print(seen)
        print(rooms)
        return len(seen) == len(rooms)