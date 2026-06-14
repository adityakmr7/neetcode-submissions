class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        function backtrack(index,currentCombination,currentSum) {
            
            if(currentSum === target) {
                result.push([...currentCombination]);
                return;
            }
            if(currentSum > target || index >= nums.length) {
                return;
            }
            currentCombination.push(nums[index]);
            backtrack(index,currentCombination, currentSum + nums[index]);
            currentCombination.pop();

            backtrack(index+1,currentCombination,currentSum);
            
        }

        backtrack(0,[],0);
        return result;
    }
}
