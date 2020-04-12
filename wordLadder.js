/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let set = new Set()
    for(let word of wordList) set.add(word);
    // end word must be in the word list otherwise return 0
    if(!set.has(endWord)) return 0;
    let queue = new Array();
    queue.push(beginWord);
    // initial level is 1 
    let level = 1
    // perform bfs
    while(Array.isArray(queue) && queue.length > 0){
        let levelLength = queue.length
        // per level
        for(let i = 0; i < levelLength; i++){
            currword = queue.shift();
            let wordDuplicate = currword.split('')
            for(let j = 0; j < wordDuplicate.length; j++){
                currlet = wordDuplicate[j]
                for(let c of 'qwertyuiopasdfghjklzxcvbnm'){
                    if(wordDuplicate[j] === c) continue;
                    else{
                        wordDuplicate[j] = c;
                        join = wordDuplicate.join('');
                        // end word found
                        if(join == endWord) return level + 1
                        
                        if(set.has(join)){
                            queue.push(join);
                            set.delete(join);
                        }
                    }
                }
                wordDuplicate[j] = currlet            
            }
        }
        level ++
    }
    return 0;
};