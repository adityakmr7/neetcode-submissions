class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestStreak = 0;
        let numSet = new Set(nums);
        for( let num of numSet) {

            // if num - 1 is not in numSet then that 
            // will be th starting point of the sequence 
            if(!numSet.has(num -1)) {
                let currentStrek = 1;
                let currentNum = num;
                while(numSet.has(currentNum +1)) {
                    currentNum += 1;
                    currentStrek +=1
                }
                longestStreak = Math.max(longestStreak, currentStrek);
            }
        }
        return longestStreak
    }
}
