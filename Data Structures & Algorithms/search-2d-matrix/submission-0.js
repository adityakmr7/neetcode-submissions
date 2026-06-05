class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if(!matrix || matrix.length === 0|| matrix[0].length === 0) return false;
        const m = matrix.length;
        const n = matrix[0].length;
        let low = 0;
        let high = (m * n) -1;
        while(low <= high) {
            let mid = Math.floor((low +high)/2);
            // important part
            let row = Math.floor(mid/n);
            let col = mid %n;
            // ------------
            let midValue = matrix[row][col];
            if(midValue === target) {
                return true;
            }else if(midValue <target) {
                low = mid+1;

            }else {
                high = mid -1;
            }
        }
        return false;
    }
}
