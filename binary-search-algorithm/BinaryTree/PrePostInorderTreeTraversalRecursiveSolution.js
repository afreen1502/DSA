//preorder - [root, left, right]
var preorderTraversal = function(root) {
    let ans=[];
    function traversal(curr){
        if(!curr) return;
        ans.push(curr.val);
         traversal(curr.left);
          traversal(curr.right)
    }
    traversal(root);
    return ans;
};

//inorder - [left, root, right]
var inorderTraversal = function(root) {
 let ans=[];
    function traversal(curr){
        if(!curr) return;
       
         traversal(curr.left);
          ans.push(curr.val);
          traversal(curr.right)
    }
    traversal(root);
    return ans;   
};

//postorder - [left, right, root]
var postorderTraversal = function(root) {
    let ans=[];
    function traversal(curr){
        if(!curr) return;
       
         traversal(curr.left);
          
          traversal(curr.right);
          ans.push(curr.val);
    }
    traversal(root);
    return ans;  
};