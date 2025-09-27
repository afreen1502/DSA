// Input: root = [3,9,20,null,null,15,7]
// Output: 3

//bottom up recurrsion
var maxDepth = function(root) {
    if(!root) return 0;
    let leftMax=maxDepth(root.left);
    let rightMax=maxDepth(root.right);
    return 1+Math.max(leftMax, rightMax);
};

//top-down recurrsion 
var maxDepth = function(root) {
    if(!root) return 0;
    let maxDepth=0;
    let traversal = (curr,level)=>{
        maxDepth=Math.max(maxDepth,level);
        curr.left && traversal(curr.left,level+1);
        curr.right && traversal(curr.right,level+1);
    }
    traversal(root,1);
    return maxDepth;
};