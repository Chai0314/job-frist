// 二叉树深度搜索
function Node(val){
    this.value = val
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
c.left = f
c.right = g
b.left = d
b.right = e

function deepSearch(root, target){
    if(root == null) return false
    if(root.value == target) return true
    let leftResult =  deepSearch(root.left,target)
    let rightResult =  deepSearch(root.right,target)
    return leftResult || rightResult
} 

console.log(deepSearch(a, 'c'));