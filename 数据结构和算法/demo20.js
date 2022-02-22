// 斐波那契数列 0 1 1 2 

function fibo(n) {
    if(n <= 0 ) return -1
    if(n == 1) return 0
    if(n == 2) return 1
    return fibo(n - 1) + fibo(n - 2)
}

// 青蛙跳台阶
console.log(fibo(4));