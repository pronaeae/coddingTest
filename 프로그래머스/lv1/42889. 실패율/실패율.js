function solution(N, stages) {
    const stageList = Array.from({length : N},(_,i)=>({stage : i + 1, clear : 0, failed : 0}))
    
    for(let i = 0; i < stages.length; i++){
        for(let j = 0; j < stageList.length; j++){
            if(stageList[j].stage === stages[i]){
                stageList[j]['failed'] += 1
            }
            if(stageList[j].stage < stages[i]){
                stageList[j].clear += 1
            }
        }
    }
    
    const newarray = stageList.map(a => ({...a,failed : a.failed/(a.clear+a.failed)}))
                    .sort((a, b) => b.failed - a.failed)
                    .map(a => a.stage)
    
    return newarray;
}