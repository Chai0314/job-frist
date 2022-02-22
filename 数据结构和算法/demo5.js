// 二叉树 根据前中序还原二叉树
let qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e']
let zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e']

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

function f1(qian, zhong) {
    if (qian == null || zhong == null || qian.length != zhong.length || qian.length == 0 || zhong.length == 0) return null
    var root = new Node(qian[0])
    var zhong1 = zhong.slice(0, zhong.indexOf(root.value))
    var zhong2 = zhong.slice(zhong.indexOf(root.value) + 1, zhong.length)
    var qian1 = qian.slice(1, zhong1.length + 1)
    var qian2 = qian.slice(qian1.length + 1, qian.length)
    root.left = f1(qian1,zhong1)
    root.right = f1(qian2,zhong2)
    return root
}

console.log(f1(qian,zhong));