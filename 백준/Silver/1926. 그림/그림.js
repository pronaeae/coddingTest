const fs = require('fs');

// const input = fs.readFileSync('./text.txt', 'utf-8').trim().split('\n');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(false));

/**
 * [0,0]부터 탐색
 * 상하좌우에 1을 만나면 해당 노드로 부터 다시 상하좌우 검색
 * 더이상 1이 없으면 저장
 * 
 * 다음 [0,1] 탐색 
 * visited에 [0,1]이 이미 탐색되었다면 패스
 * 
 * 이 과정을 grid의 크기만큼 실행행
 */

function dfs(x, y) {
    if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0 || visited[x][y]) {
        return 0;
    }
    visited[x][y] = true;
    let size = 1;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; 
    for (const [dx, dy] of directions) {
        size += dfs(x + dx, y + dy);
    }
    return size;
}

let pictureCount = 0; 
let maxSize = 0;     

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1 && !visited[i][j]) { 
            const size = dfs(i, j);               
            pictureCount++;                       
            maxSize = Math.max(maxSize, size);    
        }
    }
}

console.log(pictureCount);
console.log(maxSize);