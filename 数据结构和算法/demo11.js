// 二叉树diff算法
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
//c.left = f
c.right = g
b.left = d
b.right = e

let a1 = new Node('a')
let b1 = new Node('b1')
let c1 = new Node('c')
let d1 = new Node('d1')
let e1 = new Node('e')
let f1 = new Node('f')
let g1 = new Node('g')

a1.left = c1
a1.right = b1
c1.left = f1
//c1.right = g1
b1.left = d1
b1.right = e1
// 新增 修改 删除
function diffTree(root1, root2, diffList) {
    if (root1 == root2) return diffList
    if (root1 == null && root2 != null) {
        diffList.push({
            type: "新增",
            origin: null,
            now: root2
        })
    } else if (root1 != null && root2 == null) {
        diffList.push({
            type: "删除",
            origin: root1,
            now: null
        })
    } else if (root1.value != root2.value) {
        diffList.push({
            type: "修改",
            origin: root1,
            now: root2
        })
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)
    } else {
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)
    }
}

var diffList = []
diffTree(a, a1, diffList)
console.log(diffList);