function isPalindrome(s: string): boolean {
    const removedS = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    function palindrome(left: number, right: number){
        if(left >= right) return true;

        if(removedS[left] !== removedS[right]){
            return false;
        }

        return palindrome(left + 1, right - 1)
    };

    return palindrome(0, removedS.length -1)
};