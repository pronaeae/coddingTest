function solution(num_str) {
    var answer = 0;
    //reduce
    //for
    // forEach
    
    const convert = num_str.split("")
    const add = convert.reduce((curr, prev) => curr + parseInt(prev),0)
    return add;
}