// 二叉树 根据中后序还原二叉树

let zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e']
let hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a']

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

function f1(zhong, hou) {
    if (zhong == null || hou == null || hou.length != zhong.length || hou.length == 0 || zhong.length == 0) return null
    let root = new Node(hou[hou.length - 1])
    let zhong1 = zhong.slice(0, zhong.indexOf(root.value))
    let zhong2 = zhong.slice(zhong.indexOf(root.value) + 1, zhong.length)
    let hou1 = hou.slice(0, zhong1.length)
    let hou2 = hou.slice(zhong1.length, hou.length - 1)
    root.left = f1(zhong1, hou1)
    root.right = f1(zhong2, hou2)
    return root
}

console.log(f1(zhong, hou));