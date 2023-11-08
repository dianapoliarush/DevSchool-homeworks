const sum = function(num){
    const positiveNum = num < 0 ? 0 : num;

    let counter = 0;
    //loop for testing conditions
    for(let i= 0; i < positiveNum; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            counter += i
        }
    }
    return counter
}


console.log(sum(10))
console.log(sum(100))
console.log(sum(100000))
console.log(sum(-100))
console.log(sum(-10051351351))

