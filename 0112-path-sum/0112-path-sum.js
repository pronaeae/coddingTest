/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
   if(!root) return false;  

    if(!root.left && !root.right){
        return targetSum === root.val
    };

    const cacheVal = targetSum - root.val;
    return hasPathSum(root.left , cacheVal) || hasPathSum(root.right , cacheVal) 
};