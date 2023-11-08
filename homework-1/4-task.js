function is_prime(num) {
    for(let i = 2; i < num ** (1/2); i++){ // to reduce amount of iterations
        if(num % i === 0){
            return false;
        }
    }
    return num > 1;
}

console.log(is_prime(1))
console.log(is_prime(2))
console.log(is_prime(-1))
console.log(is_prime(11))