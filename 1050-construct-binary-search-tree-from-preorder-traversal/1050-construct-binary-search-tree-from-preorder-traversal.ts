/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function bstFromPreorder(preorder: number[]): TreeNode | null {
    let index = 0

    function build(bound){
        if(index >= preorder.length || preorder[index] > bound) return null;

        const root = new TreeNode(preorder[index++]);
        root.left = build(root.val)
        root.right = build(bound)
        return root;
    };

    return build(Infinity)
};