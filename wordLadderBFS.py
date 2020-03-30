    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:    
        hashSet = set(wordList)
        if endWord not in hashSet:
            return 0;
        queue = []
        queue.append(beginWord)
        level = 1;
        # Perform BFS
        while (queue):
            queueSize = len(queue)
            for i in range(queueSize):
                currentWord = queue.pop(0)
                tmp = [char for char in currentWord]
                # For every letter
                for i in range(len(currentWord)):
                    orig = tmp[i]
                    # Iterate through all letters in alphabet
                    for x in 'qwertyuiopasdfghjklzxcvbnm':
                        # If equal
                        if tmp[i] == x:
                            continue
                        tmp[i] = x
                        mod = ''.join(tmp)
                        # Word found! Add a level
                        if mod == endWord:
                            return level + 1
                        # Word in the set: add to queue for next level
                        if mod in hashSet:
                            queue.append(mod)
                            hashSet.remove(mod)
                    tmp[i] = orig
            # Add level for every complete single rotation of queue at each level
            level += 1
            
        return 0