function reverseVowels(s: string): string {
    const filterList = ['a','e','i','o','u'];
    const splited = s.split('');

    function reverse(left: number, right: number){
        if(left >= right) return;

        if(!filterList.includes(splited[left].toLowerCase())){
            reverse(left + 1, right);
            return;
        };

        if(!filterList.includes(splited[right].toLowerCase())){
            reverse(left, right - 1);
            return;
        };


        [splited[left] , splited[right]] = [splited[right] , splited[left]];
        reverse(left + 1, right - 1)
    };

    reverse(0, splited.length-1)
    return splited.join('')
};