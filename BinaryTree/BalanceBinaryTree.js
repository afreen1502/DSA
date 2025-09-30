// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
// Given a binary tree, determine if it is height-balanced.
// Input: root = [3,9,20,null,null,15,7]
// Output: true

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    let ans=true;
    const calculateHeight = (curr)=>{
        if(!curr) return 0;
        let leftHeight=calculateHeight(curr.left);
         let rightHeight=calculateHeight(curr.right)
         if(Math.abs(leftHeight-rightHeight)>1){
            ans=ans && false;
         }
         return 1+Math.max(leftHeight,rightHeight);
    }
   calculateHeight(root);
return ans;
};