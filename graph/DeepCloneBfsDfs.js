// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.

// Input: adjList = [[]]
// Output: [[]]

// Input: adjList = []
// Output: []

// /**
//  * // Definition for a _Node.
//  * function _Node(val, neighbors) {
//  *    this.val = val === undefined ? 0 : val;
//  *    this.neighbors = neighbors === undefined ? [] : neighbors;
//  * };
//  */

// /**
//  * @param {_Node} node
//  * @return {_Node}
//  */

//DFS
var cloneGraph = function(root) {
    if(!root) return null;
    const cloneRoot = new Node(root.val);
    const visited=new Map();
    visited.set(root,cloneRoot);
    const stack=[root];
    while(stack.length){
        let curr=stack.pop();
        for(let n of curr.neighbors){
            if(!visited.has(n)){
                stack.push(n);
                visited.set(n,new Node(n.val));
            }
            let cloneCurr=visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }
    return cloneRoot;
};


 //BFS
// var cloneGraph = function(root) {
//     if(!root) return null;
//     const cloneRoot = new Node(root.val);
//     const visited=new Map();
//     visited.set(root,cloneRoot);
//     const q=[root];
//     while(q.length){
//         let curr=q.shift();
//         for(let n of curr.neighbors){
//             if(!visited.has(n)){
//                 q.push(n);
//                 visited.set(n,new Node(n.val));
//             }
//             let cloneCurr=visited.get(curr);
//             cloneCurr.neighbors.push(visited.get(n));
//         }
//     }
//     return cloneRoot;
// };