const numberPermutation = function (num){
    const arr = num.toString().split('')

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return Number(arr.join(''))
}


console.log(numberPermutation(42145))
console.log(numberPermutation(145263))
console.log(numberPermutation(123456789))