def binarySearch(arr, key, low, up):
	if up >= 1:
		mid = (low + up)//2
		if arr[mid] == key:
			return True
		if arr[mid]	> key:
			return binarySearch(arr, key, low, mid - 1)
		else:
			return binarySearch(arr, key,  mid + 1, up)
	return False

if __name__ == '__main__':
	arr = [1,2,3,4,5,6,7,8,10,123,432,532,345,63,42,13]
	arr = sorted(arr)
	key = 13
	if binarySearch(arr, key, 0, len(arr) - 1):
		print(key, ' is in the array')
	else:
		print(key, ' not found')
