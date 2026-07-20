class Solution {
    maxLinear (nums){
        let n = nums.length;
        if(n===0) return 0;
        if(n ===1 ) return nums[0];
        let maxMoney = new Array(n).fill(0);
        maxMoney[0] = nums[0];
        maxMoney[1] = Math.max(nums[0],nums[1])
        for(let i = 2;i< n;i++) {
            maxMoney[i] = Math.max(maxMoney[i - 1],maxMoney[i-2] + nums[i]);
        }
        return maxMoney[n-1];
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n = nums.length;
        if(n===0) return 0;
        if(n ===1 ) return nums[0];

        return Math.max(
            this.maxLinear(nums.slice(0,n-1)), 
            this.maxLinear(nums.slice(1))
        );
    }
}
