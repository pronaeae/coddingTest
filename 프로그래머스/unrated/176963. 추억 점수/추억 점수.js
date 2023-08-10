function solution(name, yearning, photo) {
    
    // const mapping = name.map((a,i) => ({name : a, score : yearning[i]}))
    const index = (findName) => name.findIndex((ele)=>ele === findName)
    
    // console.log(yearning[index('may')])
    const convertForIndex = photo.map(list => list.map(item => yearning[index(item)] || 0))
    const result = convertForIndex.map(a => a.reduce((a,b) => a+b,0))
    
    
    return result;
}