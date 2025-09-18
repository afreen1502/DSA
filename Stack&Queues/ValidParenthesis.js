var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};
MyQueue.prototype.pop = function() {
    if(this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};
MyQueue.prototype.peek = function() {
        if(this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1];
    
};
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

// Given a string s containing just the characters '(', ')', '{', '}', ‘[' and ']', determine if the input string is valid.

// An input string is valid if:


// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order
// Every close bracket has a corresponding open bracket of the same type.
// Examples
// Example 1:

// Input:s = “()”

// Output:true

// Example 2:

// Input:s = “()[]{}”

// Output:true

// Example 3:

// Input:s = “(]”

// Output:false

// Example 4:

// Input:s = “([])”

// Output:true