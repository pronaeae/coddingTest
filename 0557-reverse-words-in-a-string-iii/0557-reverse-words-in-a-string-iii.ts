function reverseWords(s: string): string {
    const splited : string[] = s.split(" ");

    function reversed(word : string[], left: number, right: number){
        if(left >= right) return;
        [word[left] , word[right]] = [word[right] , word[left]]
        reversed(word,left + 1, right - 1);
    };

    for(let i = 0; i < splited.length; i++){
        const word = splited[i].split('');
        reversed(word, 0, word.length-1);
        splited[i] = word.join('')
    }

    return splited.join(' ')
};