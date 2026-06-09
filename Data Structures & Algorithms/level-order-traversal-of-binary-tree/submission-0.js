/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {

        if(root === null) return [];
        const result = [];
        const queue = [root];
        while(queue.length >0) {
            let levelSize = queue.length;
            let currentLevelValues = [];
            for(let i = 0;i< levelSize;i++) {
                let current = queue.shift();
                currentLevelValues.push(current.val)
                if(current.left !== null) queue.push(current.left);
                if(current.right !== null) queue.push(current.right);

            }
            result.push(currentLevelValues);
        }
        return result;

    }
}
