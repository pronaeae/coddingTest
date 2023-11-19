function solution(number, n, m) {
   function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
   }
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    
    return number % lcm(n,m) === 0 ?1 :0
}