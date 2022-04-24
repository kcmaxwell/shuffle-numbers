/**
 * Creates an array of length n with numbers 1..n, then shuffles and returns it.
 * @param {number} n The length of the array.
 * @returns {number[]} The shuffled array of integers.
 */
function shuffleArray(n) {
    nums = Array.from({length: n}, (value, index) => index);

    return nums;
}

console.dir(shuffleArray(10000), {'maxArrayLength': null});