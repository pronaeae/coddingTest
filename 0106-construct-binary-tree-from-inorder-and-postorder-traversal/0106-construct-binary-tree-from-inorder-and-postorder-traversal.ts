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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
   const inorderList = new Map();
   inorder.forEach((e,i) => {
        inorderList.set(e,i)
   });

   function build(inStart, inEnd, postStart, postEnd){
        if(inStart > inEnd) return null;
        const rootVal = postorder[postEnd];
        const root = new TreeNode(rootVal);

        const rootIndex = inorderList.get(rootVal);
        const leftSize = rootIndex - inStart;

        root.left = build(inStart, rootIndex - 1, postStart, postStart + leftSize - 1);
        root.right = build(rootIndex + 1, inEnd, postStart + leftSize, postEnd - 1);
        return root;
   };

   return build(0, inorder.length - 1, 0, postorder.length - 1)
};