class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if(n === 0)return 0
        if(n === 1) return nums[0];
        const maxMoney = new Array(n).fill(0);
        maxMoney[0] = nums[0];
        maxMoney[1] = Math.max(nums[0], nums[1]);

        for(let i = 2;i < nums.length;i++) {
            maxMoney[i] = Math.max(maxMoney[i-1],maxMoney[i-2] + nums[i])

        }
        return maxMoney[n-1];
    }
}
