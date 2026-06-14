class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let visited = new Set();
        function backtrack(currentState) {
            if(currentState.length === nums.length) {
                result.push([...currentState]);
                return;
            }
            
            for(let i = 0;i < nums.length ;i++) {
                if(visited.has(nums[i])) {
                    continue;
                }
                
                currentState.push(nums[i]);
                visited.add(nums[i]);
                backtrack(currentState);
                currentState.pop();
                visited.delete(nums[i]);
            }

        }

        backtrack([]);

        return result;
    }
}
