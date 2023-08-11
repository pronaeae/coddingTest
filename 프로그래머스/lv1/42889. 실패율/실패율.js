function solution(N, stages) {
    const stageList = Array.from({ length: N }, (_, i) => ({ stage: i + 1, clear: 0, failed: 0 }));
    const players = new Array(N + 2).fill(0); // 실패율 계산용 배열
    
    stages.forEach(stage => players[stage] += 1); // 각 스테이지에 있는 플레이어 수 계산
    
    let totalPlayers = stages.length;
    stageList.forEach(stage => {
        const failedPlayers = players[stage.stage];
        stage.failed = failedPlayers / totalPlayers;
        totalPlayers -= failedPlayers;
    });
    
    return stageList.sort((a, b) => b.failed - a.failed).map(a => a.stage);
}
