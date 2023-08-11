function solution(cards1, cards2, goal) {
    // let goalIndex = 0
    let answer = 'Yes'
    
    for(let i = 0; i < goal.length; i++){
        //만약에 cards1[0]이 goal[i]와 같으면
        if(cards1[0] === goal[i]){
            cards1.shift()
        }
        //만약에 cards2[0]이 goal[i]와 같으면
        else if(cards2[0] === goal[i]){
            cards2.shift()
        }
        else{
            answer = 'No'
            // console.log('같지않음')
            break;
        }
    }
    
    console.log(cards1, cards2)
    
    //결과 값은 'No'
    
    
   
    return answer
}