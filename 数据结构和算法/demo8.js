//二叉树 广度搜索
function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')
let g = new Node('g')

a.left = c
a.right = b
b.left = d
b.right = e
c.left = f
c.right = g

function f1(rootList, target) {
    if (rootList == null || rootList.length == 0) return false
    var children = []
    for (let i = 0; i < rootList.length; i++) {
        if (rootList[i].value == target) {
            return true
        } else if (rootList[i].left) {
            children.push(rootList[i].left)
        } else if (rootList[i].right) {
            children.push(rootList[i].right)
        }
    }
    return f1(children, target)
}

// console.log(f1([a], 'f'));


console.log(f1([a], "e1"));