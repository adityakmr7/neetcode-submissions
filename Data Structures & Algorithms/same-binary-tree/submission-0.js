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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(p === null && q === null) return true;
        if(p === null && q !== null) return false;
        if(q === null && p !== null) return false;

        if(p.val !== q.val) return false;

        const leftMatches = this.isSameTree(p.left,q.left);
        const rightMatches = this.isSameTree(p.right,q.right);


        return leftMatches && rightMatches;


    }
}
