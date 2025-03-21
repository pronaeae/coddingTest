const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0]);
let line = 1;

function buildTree(preStart, preEnd, inStart, inEnd, preorder, inorderIndex) {
    if (preStart > preEnd) return null;
    const rootVal = preorder[preStart];
    const root = { val: rootVal, left: null, right: null };
    if (preStart === preEnd) return root;

    const rootIndex = inorderIndex.get(rootVal);
    const leftSize = rootIndex - inStart;

    root.left = buildTree(preStart + 1, preStart + leftSize, inStart, rootIndex - 1, preorder, inorderIndex);
    root.right = buildTree(preStart + leftSize + 1, preEnd, rootIndex + 1, inEnd, preorder, inorderIndex);
    return root;
}

function postorder(node) {
    if (node === null) return;
    postorder(node.left);
    postorder(node.right);
    process.stdout.write(node.val + ' ');
}

for (let t = 0; t < T; t++) {
    const N = parseInt(input[line++]);
    const preorder = input[line++].split(' ').map(Number);
    const inorder = input[line++].split(' ').map(Number);

    const inorderIndex = new Map()
    inorder.forEach((e, i) => 
        inorderIndex.set(e, i)
    )

    const root = buildTree(0, N - 1, 0, N - 1, preorder, inorderIndex);
    postorder(root);
    console.log();
}