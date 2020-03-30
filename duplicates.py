''' 
	Given a list of integers, find the first duplicate
	Given: [1,2,3,3,4,5,2,3,1]
	>>> 3
	Given: [1,2,3,4,5]
	>>> None
'''

def duplicates(lst):
	hashset = set()
	for integer in lst:
		if integer not in hashset:
			hashset.add(integer)
		else:
			return integer
	return None