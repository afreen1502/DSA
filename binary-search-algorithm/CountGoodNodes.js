// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.
// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
// Example 3:

// Input: root = [1]
// Output: 1

// Explanation: Root is considered as good.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let countGoodNode=0;
    
    function traverse(curr,maxSeenSoFar){
        if(curr.val>=maxSeenSoFar){
           countGoodNode++; 
           maxSeenSoFar=curr.val;
        }
        curr.left && traverse(curr.left,maxSeenSoFar);
       curr.right && traverse(curr.right,maxSeenSoFar);
    }
traverse(root,-Infinity);

return countGoodNode;
};