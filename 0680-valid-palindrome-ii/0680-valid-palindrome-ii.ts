function validPalindrome(s: string): boolean {
    
    function palinderom(left: number, right: number, removed: boolean){
        if(left >= right) return true;

        if(s[left] !== s[right]){
            if(removed){
                return false;
            }

            return palinderom(left + 1, right, true) || palinderom(left, right - 1, true) 
        };

        return palinderom(left + 1, right - 1, removed)
    };

    return palinderom(0, s.length-1, false)
};