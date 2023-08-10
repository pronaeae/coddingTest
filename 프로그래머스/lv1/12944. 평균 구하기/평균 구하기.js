function solution(arr) {
    const allAdd = arr.reduce((a,b) => a+b,0)
    return allAdd / arr.length;
}