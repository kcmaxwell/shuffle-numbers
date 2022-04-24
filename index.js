/**
 * Creates an array of length n with values 1..n, then shuffles and returns it.
 * @param {number} n The length of the array.
 * @returns {number[]} The shuffled array of integers. Returns [] if n <= 0.
 */
function shuffleArray(n) {
    nums = Array.from({length: n}, (value, index) => index + 1);

    for (let i = 0; i < n - 1; i++) {
        let j = randomInRange(i, n - 1);

        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }

    return nums;
}

/**
 * Return a random number between min and max, inclusive.
 * @param {number} min The start of the range.
 * @param {number} max The end of the range.
 * @returns A random number between min and max, inclusive.
 */
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { shuffleArray, randomInRange };

let n = 10000;
console.dir(shuffleArray(n), {'maxArrayLength': null});
