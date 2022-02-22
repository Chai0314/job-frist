// 数据结构 算法 

// 数组 有固定长度并且连续的  查询快 添加和删除性能不好

var arr = [1, 3, 4, 7, 8, 2, 6, 9]

// 遍历数组

function traverseArr(arr) {
    if (arr == null) return
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//traverseArr(arr)

function Node(val) {
    this.value = val
    this.next = null
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
// 遍历链表 

// function traverseNode(node){
//     if(node == null) return
//     while(node){
//         console.log(node.value);
//         node = node.next
//     }
// }
function traverseNode(node) {//递归
    if (node == null) return
    console.log(node.value);
    traverseNode(node.next)
}
//traverseNode(node1)

// 链表逆置

function reverseNode(node) {
    if (node.next.next == null) { // 倒数第二个
        node.next.next = node // 最后一个节点的引用指向倒数第二个
        return node.next
    }else{
        var result =  reverseNode(node.next)
        node.next.next = node
        node.next = null
        return  result
    }
}
reverseNode(node1)
traverseNode(node5)