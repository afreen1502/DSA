//iterative method:
var preorderTraversal = function(root) {
    if(!root) return [];
let stack=[root];
let ans=[];
while(stack.length){
    const curr=stack.pop();
    ans.push(curr.val);
   curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
}
return ans;
}



var inorderTraversal = function(root) {
    if(!root) return [];
const ans=[];
const stack=[];
let curr=root;
while(curr || stack.length){
    while(curr){
        stack.push(curr)
        curr=curr.left;
    }
    curr=stack.pop();
    ans.push(curr.val);
    curr=curr.right;

}
return ans;
}


var postorderTraversal = function(root) {
if(!root) return [];
const s1=[root];
const s2=[];
const ans=[];
while(s1.length){
    const curr=s1.pop();
    s2.push(curr);
   curr.left && s1.push(curr.left)
   curr.right && s1.push(curr.right)
}

while(s2.length){
ans.push(s2.pop().val)
}
return ans;
}

//iterative postorder- with single stack;
var postorderTraversal = function(root) {
let curr=root;
let stack=[];
let ans=[];
let lastVisited=null;
while(curr || stack.length){
    while(curr){
    stack.push(curr);
    curr=curr.left;
    }
    let peek=stack[stack.length-1];
    
    if(peek.right && peek.right!==lastVisited){
        curr=peek.right;
    }
    else {
        ans.push(peek.val);
        lastVisited = stack.pop();
    }
}
return ans;
}