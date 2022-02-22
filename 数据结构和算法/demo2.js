//数组排序 比较和交换

var arr = [4, 3, 1, 2, 6, 7, 9, 8]
// 方法1
/* 
    [2, 3 , 1, 4] [6, 7, 9, 8] 
    [1,2][3,4] [6] [7,9,8]
    [1] [2] [3] [4] [6] [7] [9,8]

[1] [2] [3] [4] [6] [7] [8],[9]
*/

function getMin(arr) { //获取函数最小值
    if (arr == null) return
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] < arr[index] && arr[i]) || (arr[i] && index == -1)) {
            index = i
        }
    }
    let result = arr[index]
    arr[index] = null
    return result
}

function sort(arr) {
    if (arr == null) return
    let newArr = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = getMin(arr)
    }
    return newArr
}

//console.log(sort(arr));

// 冒泡排序
function compare(arr, a, b) { //比较
    return arr[a] > arr[b]
}

function exChange(arr, a, b) {  //交换
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function bubbSort(arr) {
    if (arr == null) return
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr, i, j)) { exChange(arr, i, j) }
        }
    }
}

//bubbSort(arr)

//选择排序
function chooseSort(arr) {
    if (arr == null) return
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = 0//数组中最大值的序号
        for (let j = 0; j < arr.length - i; j++) {
            if (!compare(arr, maxIndex, j)) {
                maxIndex = j
            }
        }
        exChange(arr, maxIndex, arr.length - i - 1)
    }
}
// 快速排序

// function quickSort(arr) {
//     if (arr == null || arr.length == 0) return []
//     // 选标准
//     let leader = arr[0]
//     let left = [] //比标准小的
//     let right = [] //比标准大的或相等的
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < leader) {
//             left.push(arr[i])
//         }
//         else {
//             right.push(arr[i])
//         }
//     }
//     left = quickSort(left)
//     right = quickSort(right)
//     left.push(leader)
//     return left.concat(right)
// }

function quickSort2(arr, begin, end) {
    if (begin >= end) return
    let left = begin
    let right = end
    do {
        do left++; while (left < right && arr[left] < arr[begin]);
        do right--; while (left < right && arr[right] > arr[begin]);
        if (left < right) exChange(arr, left, right)
    } while (left < right);

    let swapPoint = left == right ? right - 1 : right
    exChange(arr, begin, swapPoint)
    quickSort2(arr, begin, swapPoint)
    quickSort2(arr, swapPoint + 1, end)
}

function quickSort(arr) {
    quickSort2(arr, 0, arr.length)
}

quickSort(arr)
console.log(arr);