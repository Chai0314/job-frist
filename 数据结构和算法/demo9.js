//二叉树比较 左右树不交换
function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
var g = new Node('g')

a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

var a1 = new Node('a')
var b1 = new Node('b')
var c1 = new Node('c')
var d1 = new Node('d')
var e1 = new Node('e')
var f1 = new Node('f')
var g1 = new Node('g')

a1.left = c1
a1.right = b1
c1.left = f1
c1.right = g1
b1.left = d1
b1.right = e1

function compareTree(root1, root2) {
    if (root1 == root2) return true
    if (root1 == null && root2 != null || root1 != null && root2 == null) return false
    if (root1.value != root2.value) return false
    var resultLeft = compareTree(root1.left, root2.left)
    var resultright = compareTree(root1.right, root2.right)
    return resultLeft && resultright
}

console.log(compareTree(a, a1));