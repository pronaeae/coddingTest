function twoSum(numbers: number[], target: number): number[] {
    
    function find(left: number, right:number){
        if(left >= right) return;

        const sum = numbers[left] + numbers[right];
        if(sum === target) return [left + 1, right + 1];
        if(sum > target) return find(left, right - 1);
        if(sum < target) return find(left + 1, right);
    };

    return find(0, numbers.length-1);
};