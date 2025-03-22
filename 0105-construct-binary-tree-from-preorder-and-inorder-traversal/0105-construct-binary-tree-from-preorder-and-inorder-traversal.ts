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
function buildMap(list: number[]){
    const map = new Map();

    list.forEach((e,i) => {
        map.set(e,i)
    });

    return map
};

function build(
    preStart: number, 
    preEnd: number, 
    inStart: number, 
    inEnd: number, 
    preorder: number[], 
    inorder: number[], 
    inorderMap: Map<number, number>
    ){
    if(preStart > preEnd) return null;
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);
    const rootIndex = inorderMap.get(rootVal);
    const leftSize = rootIndex - inStart;

    root.left = build(preStart + 1, preStart + leftSize, inStart, rootIndex - 1,preorder, inorder,      inorderMap);
    root.right = build(preStart + leftSize + 1, preEnd, rootIndex + 1, inEnd,preorder, inorder,      inorderMap);

    return root
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderMap = buildMap(inorder);

    return build(0, preorder.length - 1, 0, inorder.length - 1, preorder, inorder, inorderMap);
};
