class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
let stack = [];

        // Fix 1: Use for...of to get the actual token values
        for (let item of tokens) {
            if (item === "+" || item === "-" || item === "*" || item === "/") {
                // Fix 3: Pop the top two numbers in correct order
                const b = stack.pop();
                const a = stack.pop();
                
                // Fix 2: Calculate the intermediate result and push it BACK to the stack
                if (item === "+") {
                    stack.push(a + b);
                } else if (item === "-") {
                    stack.push(a - b);
                } else if (item === "*") {
                    stack.push(a * b);
                } else if (item === "/") {
                    // Math.trunc removes fractional digits, truncating toward zero
                    stack.push(Math.trunc(a / b));
                }
            } else {
                // If it's a number, convert it from string to integer and push it
                stack.push(Number(item));
            }
        }
        
        // The final remaining element in the stack is our total evaluation
        return stack.pop();
    }
}
