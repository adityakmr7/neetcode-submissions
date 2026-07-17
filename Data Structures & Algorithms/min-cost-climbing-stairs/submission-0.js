class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        const minCost = [];
        minCost[0] = cost[0];
        minCost[1] = cost[1];
        for(let i = 2;i <n;i++) {
            minCost[i] = Math.min(minCost[i-1],minCost[i-2]) + cost[i]
        }
        return Math.min(minCost[n-1],minCost[n-2]);
    }
}
