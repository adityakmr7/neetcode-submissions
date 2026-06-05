class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const mapper = {
            "]" :"[",
            "}":"{",
            ")": "("
        }
        for(let i = 0;i < s.length;i++) {
            let current = s[i];
            if(current === "[" || current== "{" || current==="(") {
                stack.push(current);
            }else {
                let lastItem = stack.pop();
                if(mapper[current] !== lastItem) {
                    return false;
                }
            }

        }
        return stack.length ===0
    }
}
