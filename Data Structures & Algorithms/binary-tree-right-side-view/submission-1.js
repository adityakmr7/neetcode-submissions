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
     * @return {number[]}
     */
    rightSideView(root) {
        if(root === null) return []
        let queue = [root];
        let result = []
        while(queue.length > 0) {
            let levelSize = queue.length;
            // let levelOrder = [];
            for(let i =0;i < levelSize;i++) {
                let current = queue.shift();
                if(i === levelSize - 1) {
                    result.push(current.val);
                }
                if(current.left !== null) queue.push(current.left);
                if(current.right !== null) queue.push(current.right);
                
            }
        }
        return result;
    }
}
