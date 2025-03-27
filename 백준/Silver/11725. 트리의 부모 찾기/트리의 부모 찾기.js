const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

const parent = new Array(N + 1).fill(0);
const visited = new Array(N + 1).fill(false);

function dfs(node){
    visited[node] = true;
    for(const next of graph[node]){
        if(!visited[next]){
            parent[next] = node;
            dfs(next)
        }
    }
}

dfs(1);

for(let i = 2; i <= N; i++){
    console.log(parent[i])
}