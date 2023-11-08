function findNb(m) {
    let n = 1;  // start from the end of the statement, 1^3 + 2^3 + ... + n^3 = m
    let sum = 0;

    while(sum < m) {
        sum += n ** 3;
        n++;
    }

    return sum === m ? n - 1  : -1 // because of n++
}


console.log(findNb(1071225));
console.log(findNb(91716553919377));
console.log(findNb(5573737));
console.log(findNb(225));