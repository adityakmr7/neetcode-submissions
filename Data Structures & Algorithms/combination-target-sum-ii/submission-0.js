class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        candidates.sort((a,b) => a-b);
        function backtrack(index,currentState,currentSum) {

            if(currentSum === target) {
                result.push([...currentState]);
                return;
            }
            if(currentSum > target || index >= candidates.length) {
                return;
            }
            for(let i = index;i <candidates.length; i++) {

                if(i > index && candidates[i] === candidates[i-1]) {
                    continue;
                }
                currentState.push(candidates[i]);
                
                backtrack(i + 1,currentState,currentSum + candidates[i] )

                currentState.pop();
            }

        }

        backtrack(0,[],0);
        return result;
    }
}
