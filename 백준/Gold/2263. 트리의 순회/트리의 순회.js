const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const inorder = input[1].split(' ').map(Number);
const postorder = input[2].split(' ').map(Number);

const inorderIndex = new Map();

inorder.forEach((e, i) => 
    inorderIndex.set(e, i)
)

function buildTree(inStart, inEnd, postStart, postEnd) {
    if (inStart > inEnd) return;
    const rootVal = postorder[postEnd];
    process.stdout.write(rootVal + ' ');

    const rootIndex = inorderIndex.get(rootVal);
    const leftSize = rootIndex - inStart;

    buildTree(inStart, rootIndex - 1, postStart, postStart + leftSize - 1);
    buildTree(rootIndex + 1, inEnd, postStart + leftSize, postEnd - 1);
}

buildTree(0, N - 1, 0, N - 1);
