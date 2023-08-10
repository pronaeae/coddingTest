process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // row의 길이를 먼저 구함
    const col = new Array(a).fill('*').join("")
    const row = new Array(b).fill(col)
    
    
    console.log(row.join('\n'))
});