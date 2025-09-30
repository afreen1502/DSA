// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

//  Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.




 //top down recurrsion
// var hasPathSum = function(root, targetSum) {
//     if(!root) return false;
//     let ans=false;
//     function calculateSum(curr, currSum){
//            let sum=curr.val+currSum;
//         if(!curr.left && !curr.right){
//             if(sum===targetSum)
//             ans =  ans || true;
//         }
     
//         curr.left && calculateSum(curr.left, sum)
//         curr.right && calculateSum(curr.right, sum)
//     }
//     calculateSum(root,0)
//     return ans;
// };

//bottom up recursion
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    if(!root.left && !root.right){
        if(root.val===targetSum){
            return true;
        }
    }
    let leftTreeSum = hasPathSum(root.left,targetSum-root.val);
    let rightTreeSum = hasPathSum(root.right,targetSum-root.val);
    return leftTreeSum || rightTreeSum;
}