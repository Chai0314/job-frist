// 树 二维数据结构 二叉树  度 有子节点中节点子节点最多的有几个 深度有几层
// 二叉树 满二叉树 完全二叉树（国内 国外不一样）
function Node(value){
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

// 前序遍历 先根节点 在左节点 最后右节点
function beforeNodeTree(root){
    if(root == null) return
    console.log(root.value);
    beforeNodeTree(root.left)
    beforeNodeTree(root.right)
}
// beforeNodeTree(a) // a c f g b d e
// 中序遍历 先左节点 在根节点 最后右节点
function centreNodeTree(root){
    if(root == null) return
    centreNodeTree(root.left)
    console.log(root.value);
    centreNodeTree(root.right)
}
// centreNodeTree(a)  // f c g a d b e
// 后序遍历 先左节点 在右节点 最后根节点
function afterNodeTree(root){
    if(root == null) return
    afterNodeTree(root.left)
    afterNodeTree(root.right)
    console.log(root.value);
}
// afterNodeTree(a) // f g c d e b a
