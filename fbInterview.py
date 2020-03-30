"""
Given integer n >= 0, print all strings representing 
valid ways to write n pairs of parentheses. 

Print order across lines does not matter.

Examples:

> generateParentheses(1)
()

> generateParentheses(2)
(())
()()

OR

()()
(())

> generateParentheses(3)
((()))
(()())
(())()
()(())
()()()
"""

'''
            (
        (        )
    (     )    (    )
 (    ) (   )(   ) (  )

'''

'''
===================
My notes on collection (post interview):
    Thought it was a BST question at first. Realised it can be solved with recursion much easier,
    so I just did that.

    Hints given by engineer:
        - Hinted at a branching process other than a BST but quite vaguely
        - I initially had:
            if nO != n:
                string += "("
                helper(nO+1, nC, n, string)
            if nC !=  n and nC < nO:
                string + ")"
                helper(nO, nC+1, n, string)

            - The engineer hinted at this causing issues with modifying the string between the if
              statements, so I put the string concatenation in the recursive call so that local
              copies are created.
'''



def helper(nO, nC, n, string):
    if nO == n and nC == n:
        print(string)
    
    if nO != n:
        helper(nO+1, nC, n, string + "(")
    if nC !=  n and nC < nO:
        helper(nO, nC+1, n, string + ")")
        
def generateParentheses(n):
    string = "("
    helper(1, 0, n, string)










'''
===================
My notes on collection (post interview):
    All 3 operations had to be O(1) time.
    add() & get_random() were easy to implement in O(1) since python is good with that
    remove() was the problem since it works in O(n) time usually.

    To change this, I made a dictionary with all the indices for each value so that we can find 
    the first occurence of the value in the list in O(1) time. Then, to actually remove it,
    I switch that occurence of the element with the last item in the list, and then delete the
    last item in the list.

    Hints given by engineer:
        - remove() is O(n) time, make it O(1)
        - Once I made the dictionary, he gave me a hint to swap with the last item rather than doing .pop(index)
'''




"""
Create a collection class with three methods:

class Collection:
    def add(self, value):    # add integer to collection
    def remove(self, value): # remove integer from collection
    def get_random(self):    # return random integer from collection

Duplicates are acceptable, so get_random 
should respect the probability of getting 
each item

Memory is not a concern but should 
be reasonable

Example usage:

> c = Collection()
> c.add(1)
> c.add(1)
> c.add(2)
> c.get_random() # 2/3 chance of returning 1, 1/3 chance of returning 2
1
> c.remove(2)
true
> c.remove(2)
false
"""

class Collection:
    def __init__():
        collection = []
        startindices = {}
    
    def add(self, value):    # add integer to collection
        if value not in collection:
            startindices[value] = [len(collection)]
        else:
            startindices[value].add(len(collection))
        collection.add(value)      
        
        
    def remove(self, value): # remove integer from collection
        if startindices[value] != None:    
            index = startindices[value].pop(0)
            if (len(startindices[value] == 0):
                del startindices[value]
            collection[index] = collection[-1]
            del startindices[collection[-1]][-1]
            collection.pop(-1)
            return True
        else:
            return False
        
    def get_random(self):    # return random integer from collection
        i = random.randrange(0, len(collection))
        output = collection[i]
        return output
        