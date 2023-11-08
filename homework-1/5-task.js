function highAndLow(string){
    return Math.max(...string.split(' ')) + ' ' + Math.min(...string.split(' '))
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));