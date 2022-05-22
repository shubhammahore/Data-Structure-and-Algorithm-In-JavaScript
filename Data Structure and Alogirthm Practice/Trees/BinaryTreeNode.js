//Create Binary Tree 
//  -1) Perfect Binary Tree 
        //-a)No of total Node on each level doubled sas we move down the tree
        //-b)No of Nodes in the last level is equal to sum of no of node in all the other levels+1
//  -2) Full Binary Tree
//Lookup O(log N)
//Insert O(log N)
//Delete O(log N)
// # of Nodes = 2^h - 1
/*
                1
    1.1                 1.2
1.1.1   1.1.2      1.2.1   1.2.2
*/

function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}


console.log('...............................................................');