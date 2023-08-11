function solution(k, m, score) {
    var answer = 0;
    //score을 정렬을 시킴
    const scoreDesc = [...score.sort((a,b) => b-a)];
    const box = []
    
    //box 포장시킴
    for(let i = 0; i < scoreDesc.length; i+=m){
        box.push(score.slice(i, i+m))
    }
    //마지막 box가 m개의 사과를 가지고 있지 않으면 지움
    if(box[box.length -1].length !== m){
        box.pop()
    }
    //값을 측정함
    const result = box.map(list => list[m-1] * m).reduce((a,b) => a+b,0)
    
    
    return result;
}
