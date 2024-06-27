# binary-search-trees

## Description

This package contains :

### Tree

A factory that when invoked (with an _array_ as argument) create a Binary Search Tree (BST). The factory come with some functions :

- getRoot : Return the root node of the tree
- insert(_value_) : Insert the given _value_ into the tree
- deleteItem(_value_) : Remove the node with the given _value_ from the tree
- find(_value_) : Return the node with the given _value_
- levelOrder(_callback ?_) : If a _callback_ function is passed, call it for each node, in Breadth-first level order. If nothing is passed, return an array containing all the values
- inOrder(_callback ?_) : If a _callback_ function is passed, call it for each node, in Depth-first order (In-order). If nothing is passed, return an array containing all the values
- preOrder(_callback ?_) : If a _callback_ function is passed, call it for each node, in Depth-first order (Pre-order). If nothing is passed, return an array containing all the values
- postOrder(_callback ?_) : If a _callback_ function is passed, call it for each node, in Depth-first order (Post-order). If nothing is passed, return an array containing all the values
- height(_node_) : Return the height of a given _node_
- depth(_node_) : Return the depth of a given _node_
- isBalanced : Return true if the tree is balanced, else false. A balanced tree is a tree where for every node, the difference between heights of its left-subtree and its right-subtree is not more than 1.
- rebalance : Rebalance the tree

#### Note

A Node class is called to create each node. The node constructor expect to receive one argument, value.

A Node value can be accessed by node.data, its left-subtree by node.left and its right-subtree by node.right.

Keep in mind that the rebalance function won't change anything if the tree is balanced and that it isn't called automatically if isBalanced returns false. Same as the insert function doesn't check if the tree is balanced neither rebalance the tree after adding a new element.
