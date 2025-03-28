const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

//
const graph = Array.from({length: N + 1} , () => []);
for(let i = 1; i < N ; i++){
    const [a,b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

let totalDepth = 0;

function dfs(node, parent, depth) {
    let isLeaf = true;

    for (const next of graph[node]) {
        if (next !== parent) {
            isLeaf = false;
            dfs(next, node, depth + 1);
        }
    }

    if (isLeaf) {
        totalDepth += depth;
    }
}

dfs(1, 0, 0);
console.log(totalDepth % 2 === 1 ? 'Yes' : 'No')