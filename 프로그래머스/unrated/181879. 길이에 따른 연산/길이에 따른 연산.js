function solution(num_list) {
    return num_list.length >= 11 ?num_list.reduce((curr,prev) => curr + prev,0) : num_list.reduce((curr,prev) => curr * prev,1);
}