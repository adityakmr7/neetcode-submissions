class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = {};
        function recursive(n) {

            if(n in memo) return memo[n];

            if(n === 1) return 1;
            if(n===2 ) return 2;
            const result= recursive(n-1) + recursive(n-2);
            memo[n]= result;
            return result;
        }
        return recursive(n);
       
    }
}
