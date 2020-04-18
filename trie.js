

// ES 6
class Trie {
	constructor(){
		// map is not necessary since we're only using strings
		this.root = new Object();
	}
	insert(word){
		let curr = this.root;
		for(char of word){
			if(curr[char]) curr = curr[char];
			else{
				node = new Object();
				curr[char] = node;
				curr = curr[char];
			}
		}
		curr.isWord = true;
	}
	search(word){
		let curr = this.root;
		for(char of word){
			if(curr[char]) curr = curr[char];
			else return false
		}
		return curr.isWord ? true : false;
	}
	isPrefix(prefix){
		let curr = this.root;
		for(char of prefix){
			if(curr[char]) curr = curr[char]
			else return false
		}
		if(Object.keys(curr).length == 0 && !curr.isWord) return false
		return true
	}
}




// ES5 SYNTAX
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new Object();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for(char of word){
        if(curr[char]) curr = curr[char]
        else{
            curr[char] = new Object()
            curr = curr[char]
        }
    }
    curr.isWord = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for(char of word){
        if(curr[char]) curr = curr[char]
        else return false
    }
    return curr.isWord ? true : false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for(char of prefix){
        if(curr[char]) curr = curr[char]
        else return false
    }
    if(Object.keys(curr).length > 0 || curr.isWord)return true;
    return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
