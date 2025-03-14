/**
 Do not return anything, modify s in-place instead.
 */

function reverseString(s: string[]): void {
    
    function reverse(left : number, right : number){
        if(left >= right) return;
        [s[left],s[right]] = [s[right], s[left]];

        reverse(left + 1 , right - 1)
    }

    reverse(0, s.length-1)
};