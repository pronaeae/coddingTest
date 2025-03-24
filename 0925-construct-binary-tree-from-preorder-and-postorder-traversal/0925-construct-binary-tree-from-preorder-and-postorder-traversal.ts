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
function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    const postIndex = new Map();
    postorder.forEach((e,i) => {
        postIndex.set(e,i)
    })
    function build(preStart, preEnd, postStart, postEnd) {
        if (preStart > preEnd) return null;
        const root = new TreeNode(preorder[preStart]);
        if (preStart === preEnd) return root;

        const leftRootVal = preorder[preStart + 1];
        const leftRootPostIndex = postIndex.get(leftRootVal);
        const leftSize = leftRootPostIndex - postStart + 1;

        root.left = build(preStart + 1, preStart + leftSize, postStart, leftRootPostIndex);
        root.right = build(preStart + leftSize + 1, preEnd, leftRootPostIndex + 1, postEnd - 1);
        return root;
    }

    return build(0, preorder.length - 1, 0, postorder.length - 1);
};