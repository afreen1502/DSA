// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i=0;
    let j=1;
    let m=needle.length;
    let n=haystack.length;
    let lps=[0];
    while(j<m){

        if(needle[j]===needle[i]){
            lps[j]=i+1;
            i++;
            j++;
        }
        else {
            if(i==0){
                lps[j]=0;
                j++;
            }
            else {
              i=lps[i-1]
            }
        }
    }
    i=j=0;
    while(i<n){
        if(haystack[i]===needle[j]){
            ++i;
            ++j;
        }
        else{
            if(j==0){
                i++;
            }
            else{
                j=lps[j-1];
            }
        }
        if(j==m){
            return i-m;
        }
    }
    return -1;
    }