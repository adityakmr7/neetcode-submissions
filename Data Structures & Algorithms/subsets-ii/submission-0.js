class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result  = [];
        nums.sort((a,b) => a-b);
        function backtrack(index,currentState) {
            // find out the base case
            result.push([...currentState]);

            for(let i =index; i< nums.length;i++) {
                if(i > index && nums[i] === nums[i-1]) {
                    continue;
                }
                currentState.push(nums[i]);
                backtrack(i +1,currentState);
                currentState.pop();
              
            }

        }

        backtrack(0,[]);

        return result;
    }
}
