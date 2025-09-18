// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn’t exist, return -1 for this number.

// Examples:
// Example 1:

// Input:

// nums = [1,2,1]

// Output: [2,-1,2]
var nextGreaterElements = function(arr) {
    let n = arr.length;
    let stack = [];
    let ans = Array(n).fill(-1);
    stack.push(arr[n-1]);
    for(let i=(2*n)-2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i % n] < top){
                ans[i % n] = top;
                break;
            } else{
                stack.pop();
            }
        }
        stack.push(arr[i % n]);
    }
    return ans.slice(0, n);
};