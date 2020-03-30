#include <stdio.h>


BSTree newTree (void);
BSTree newNode (int v)
BSTree insertNode (BSTree t, int v)
void freeTree (BSTree t)


typedef struct TreeNode *BSTree;

typedef struct TreeNode {
	int val;
	struct TreeNode *Left;
	struct TreeNode *Right;
} Tree;


int int main(int argc, char const *argv[]){
	/* code */
	return 0;
}


BSTree newTree (void) {
	return NULL;
}

BSTree newNode (int v) {
	// Allocate space of pointer of type BSTree
	BSTree new = malloc(sizeof(*new));
	// To check if allocation was successful
	if (new == NULL) {
		perror("No more memory");
		exit();
	}
	new->val = v;
	new->left = NULL;
	new->right = NULL;
	return new;
}

BSTree insertNode (BSTree t, int v) {
	// Tree is empty
	if (t == NULL) return newNode(v);
	// Insert to right of tree since v is bigger than tree value
	else if (t->val < v) {
		return insertNode(t->right, v);
	} 
	// Insert to left of tree
	else if (t->val > v) {
		return insertNode(t->left, v);
	} else if (t->val == v) {
		printf("Do you really want to insert a value of the same value?")
	}
	return t;
}

void freeTree (BSTree t) {
	if (t == NULL) return;
	freeTree(t->left);
	freeTree(t->right);
	free(t)
}