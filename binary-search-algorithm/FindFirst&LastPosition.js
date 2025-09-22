// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Method 1:
// var searchRange = function(nums, target) {
//     let l=0;
//     let r=nums.length-1;
//     let ans=[-1,-1];
//     while(l<r){
//         let m= l+Math.floor((r-l)/2);
//         if(nums[m]<target){
//             l=m+1;
//         }
//         else {
//             r=m;
//         }
//     }
//     if(nums[l]==target){
//     ans[0]=l;
//     }
//     l = 0;
//     r = nums.length - 1;
//       while(l<r){
//         let m= l+Math.ceil((r-l)/2);
//         if(nums[m]>target){
//             r=m-1;
//         }
//         else {
//             l=m;
//         }
//     }
//      if(nums[l]==target){
//     ans[1]=l;
//     }
//     return ans;
// };


//Method 2
var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            ans[0] = m;
            r = m - 1;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    l = 0;
    r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === target) {
            ans[1] = m;
            l = m + 1;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return ans;
};