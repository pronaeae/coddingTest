function reverseVowels(s: string): string {
    const filterList = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const splited = s.split('');

    function reverse(left: number, right: number){
        if(left >= right) return;

        if(!filterList.has(splited[left])){
            reverse(left + 1, right);
            return;
        };

        if(!filterList.has(splited[right])){
            reverse(left, right - 1);
            return;
        };


        [splited[left] , splited[right]] = [splited[right] , splited[left]];
        reverse(left + 1, right - 1)
    };

    reverse(0, splited.length-1)
    return splited.join('')
};