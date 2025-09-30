// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Input: root = [1,2,2,3,4,4,3]
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
// var isSymmetric = function(root) {

//    const isMirror=(a,b)=>{
//        if(!a && !b){
//     return true;
//    }
//    if(!a || !b){
//     return false;
//    }
//     return a.val===b.val && isMirror(a.left,b.right) && isMirror(a.right,b.left)
//    }
//   return isMirror(root.left, root.right)

// };

//iterative approach

var isSymmetric = function(root) {
let q=[root.left, root.right];
while(q.length){
    a=q.shift();
    b=q.shift();
    if(!a && !b){
        continue;
    }
        if(!a || !b){
        return false;
    }
        if(a.val !== b.val){
        return false;
    }
    q.push(a.left,b.right);
     q.push(a.right,b.left);
}
return true;
}