function reverseOnlyLetters(s: string): string {
    const reg = /[a-zA-Z]/
    const splited = s.split('');

    function reverse(left: number, right: number){
        if(left >= right) return;

        if(!reg.test(splited[left])){
            reverse(left + 1, right);
            return;
        };

        if(!reg.test(splited[right])){
            reverse(left, right - 1);
            return;
        }

        [splited[left] , splited[right]] = [splited[right] , splited[left]];
        reverse(left + 1, right - 1);
    };

    reverse(0, splited.length-1);
    return splited.join('')
};