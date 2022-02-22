// 栈和队列
/* 
    栈 先进后出
    队列 先进先出
*/

function Stack() { //栈
    this.arr = []
    this.push = function (value) {
        this.arr.push(value)
    }
    this.pop = function () {
        return this.arr.pop()
    }
}

function Queue() { //队列
    this.arr = []
    this.push = function (value) {
        this.arr.push(value)
    }
    this.pop = function () {
        return this.arr.shift()
    }
}

let queue = new Queue()

queue.push(1)
queue.push(2)

console.log(queue.pop(), queue.arr);

let stack = new Stack()

stack.push(1)
stack.push(2)

console.log(queue.pop(), queue.arr);