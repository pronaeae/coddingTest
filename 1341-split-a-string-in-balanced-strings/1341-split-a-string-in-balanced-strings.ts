function balancedStringSplit(s: string): number {
    let count = 0;

    function balance(index: number, rcount: number, lcount: number){
        if(index >= s.length) return;

        if(s[index] === 'L') lcount++
        if(s[index] === 'R') rcount++

        if(rcount === lcount) count++
        balance(index + 1, rcount, lcount)
    }

    balance(0,0,0)
    return count
};