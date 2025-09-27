//Input: root = [3,9,20,null,null,15,7]
//Output: [[3],[9,20],[15,7]]

//Iterative BFS approach
var levelOrder = function(root) {
    if(!root) return [];
    let ans=[];
    let q=[root];
    while(q.length){
        let levelArr=[];
        let levelSize=q.length;
        for(let i=0;i<levelSize;i++){
            const curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val);
        }
        ans.push(levelArr);
    }
    return ans;
};

//Recursive 
var levelOrder = function(root) {  
    if(!root) return [];
    let ans=[];

    function traversal(curr,level){
        if(!ans[level]) ans[level]=[];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left,level+1);
        curr.right && traversal(curr.right,level+1)
    }
    traversal(root,0);
    return ans;
}