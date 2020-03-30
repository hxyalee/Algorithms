#include <stdio.h>
#define TRUE 1
#define FALSE 0

int binarySearch(int arr[], int key, int low, int up);

int main (){

	int arr[] = { 2, 3, 4, 10, 40 }; 
    int n = sizeof(arr) / sizeof(arr[0]); 
    int x = 10; 
    int result = binarySearch(arr, x, 0, n - 1); 
    (result == -1) ? printf("Element is not present in array\n") 
                   : printf("Element is present at index\n"); 
    return 0; 

}


/*
	Recursive binary search
	given array from [low ... up]
	return True if found, otherwise False
*/
int binarySearch(int arr[], int key, int low, int up) {
	if (up >= 1) {
		int mid = (low  + up)/2;
		if (arr[mid] == key) {
			return TRUE;
		} else if (arr[mid] > key) {
			return binarySearch(arr, key, low, mid - 1);
		} else {
			return binarySearch(arr, key, mid + 1, up);
		}
	}
	return FALSE;
}