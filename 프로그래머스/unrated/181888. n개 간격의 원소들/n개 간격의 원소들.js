function solution(num_list, n) {
    var answer = [];
    
   
    return num_list.filter((_, index) => index % n === 0);
}