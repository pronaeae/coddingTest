const fs = require('fs');
// const input = fs.readFileSync('text.txt').toString().trim().split('\n').map(Number);
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const preorder = [...input];

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function buildTree(start, end) {
    /**
     */
    if(start > end) return null;
    const root = new TreeNode(preorder[start]);
    if(start === end) return root;

    let rightStart = start + 1;
    while(rightStart <= end && preorder[rightStart] < root.val){
        rightStart++
    };

    root.left = buildTree(start + 1, rightStart - 1);
    root.right = buildTree(rightStart , end);

    return root
}

function postorder(node) {
    if (node === null) return;
    postorder(node.left);
    postorder(node.right);
    console.log(node.val);
}

const root = buildTree(0, preorder.length - 1);
postorder(root);