function returnIndex(array){
    for(const [index, num] of array.entries()){
        const leftSum = array.slice(0, index).reduce(function (acc, num) {
            return acc + num
        }, 0);
        const rightSum = array.slice(index + 1).reduce(function (acc, num) {
            return acc + num
        }, 0);

        if(leftSum === rightSum) {
            return index
        }
    }
    return -1; // if leftSum !== rightSum
}


console.log(returnIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(returnIndex([1, 100, 50, -51, 1, 1]))
console.log(returnIndex([20, 10, -80, 10, 10, 15, 35]))

console.log(returnIndex([1, 3, 2, 0, 3, 3]))
console.log(returnIndex([1, 15, 12, 12, 0, 12]))