function shuffleArray(n) {
    nums = Array.from({length: n}, (value, index) => index);

    return nums;
}

console.dir(shuffleArray(10000), {'maxArrayLength': null});