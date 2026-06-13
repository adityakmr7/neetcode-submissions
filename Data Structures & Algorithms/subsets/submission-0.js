class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        function backtrack(index,currentPath) {
            result.push([...currentPath]);

            for(let i = index;i < nums.length;i++) {
                
                currentPath.push(nums[i]);
                backtrack(i+1,currentPath);
                currentPath.pop();
            }
        }

        backtrack(0,[]);
        return result;
    }
}
