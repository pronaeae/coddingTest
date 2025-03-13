function areNumbersAscending(s: string): boolean {
   // 1. 공백을 기준으로 Split
   // 2. Split한 값이 prev 값보다 큰지 확인
   // 3. 2번이 true이면 1번의 길이만큼 2번을 실행
   // 4. 2번이 false이면 false를 반환

    const splitedString = s.split(' ');

    let prev = -1;
    let index = 0;

    function recursion(val: string): boolean {
        // 끝까지 돌았을 때 true를 반환
        if(index >= splitedString.length) return true;
        
        // 현재 값이 숫자인지 확인
        const parsedVal = parseInt(val);
        
        // 숫자일 경우 처리
        if(!isNaN(parsedVal)) {
            // 작거나 같으면 바로 false를 반환
            if(parsedVal <= prev) {
                return false;
            }
            // 숫자가 더 크면 prev 업데이트
            prev = parsedVal;
        }
        
        // 다음 인덱스로 이동
        index++;
        
        // 다음 인덱스가 유효한지 확인
        if(index >= splitedString.length) return true;
        
        // 다음 값으로 재귀 호출
        return recursion(splitedString[index]);
    }

    return recursion(splitedString[0]);
}