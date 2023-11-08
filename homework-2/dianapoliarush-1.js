function maxHonor(arr, d) {
    const n = arr.length;
    const step = n / d;
    let maxHonorSum = -Infinity; // cause honor can be negative as well

    //checking conditions
    if (n === 0 || d <= 0 || d > 31 || n % d !== 0) return;

    //possible positions for d people, i - start position
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        // j - leader index
        for (let j = 0; j < d; j++) {
            const currentLeaderIndex = (i + j * step) % n;
            currentSum += arr[currentLeaderIndex];
        }
        maxHonorSum = Math.max(maxHonorSum, currentSum);
    }
    return maxHonorSum;
}

console.log(maxHonor([1, 2, 3, 4], 2));
console.log(maxHonor([1, 5, 6, 3, 4, 2], 3));
console.log(maxHonor([1, 1, 0], 1));

console.log(maxHonor([1, 7, 8, 0, 2, 4, 7, 1], 4));
console.log(maxHonor([1, 7, 8, 0, 2, 4, 7, 1, 100, 200], 5));
console.log(maxHonor([-3, -5, -3, 0, -1, -8], 3));
console.log(maxHonor([-3, -5, -3, 0, -1, -8], 55));