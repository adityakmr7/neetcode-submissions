class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // result array of size k;
        let finalResult = [];

        let frequencyMap = new Map();
        for(let current of nums) {
          
                frequencyMap.set(current, (frequencyMap.get(current) || 0) + 1);
        
          
        }
        let resultArr = [];
        for( let [key,val] of frequencyMap) {
            resultArr.push([key,val]);
        }
        resultArr.sort((a, b) => b[1] - a[1]);
        for(let i = 0; i < k;i++) {
            finalResult.push(resultArr[i][0]);
        }
        return finalResult;
    }
}
