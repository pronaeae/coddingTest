const fs = require('fs');
const [N, ...rest] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(item => item.trim());

class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    };
};

const tree = {};

rest.forEach((e) => {
    const [node , left, right] = e.split(" ");
    if(!tree[node]) tree[node] = new TreeNode(node);
    
    if(left !== '.'){
        tree[left] = new TreeNode(left);
        tree[node].left = tree[left];
    }
    
    if(right !== '.'){
        tree[right] = new TreeNode(right);
        tree[node].right = tree[right];
    }
})

function preorder(node){
    if(node === null) return;

    process.stdout.write(node.val)
    preorder(node.left);
    preorder(node.right);
};

function inorder(node){
    if(node === null) return;

    inorder(node.left);
    process.stdout.write(node.val);
    inorder(node.right);
};

function postorder(node){
    if(node === null) return;
    
    postorder(node.left);
    postorder(node.right);
    process.stdout.write(node.val);
}

const root = tree['A'];
preorder(root)
console.log('')
inorder(root)
console.log('')
postorder(root)