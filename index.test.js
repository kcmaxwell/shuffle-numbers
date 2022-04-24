const { test, expect } = require('@jest/globals');
const { shuffleArray, randomInRange } = require('./index.js');

// Unit tests for shuffleArray
test("shuffleArray returns empty array if n <= 0", () => {
    let n = -1;
    expect(shuffleArray(n)).toStrictEqual([]);
});

test("shuffleArray returns array of length n", () => {
    let n = 10000;
    expect(shuffleArray(n)).toHaveLength(n);
});

test("shuffleArray returns an array containing the numbers 1 through n, uniquely", () => {
    let n = 10000;
    let nums = Array.from({length: n}, (value, index) => index + 1);
    expect(shuffleArray(n).sort((a, b) => a - b)).toStrictEqual(nums);
});

// Unit tests for randomInRange
test("randomInRange returns a number between min and max inclusive", () => {
    let min = 0;
    let max = 1000000;
    let random = randomInRange(min, max);
    expect(random).toBeGreaterThanOrEqual(min);
    expect(random).toBeLessThanOrEqual(max);
});

test("randomInRange returns correctly if min == max", () => {
    let min = 5;
    expect(randomInRange(min, min)).toEqual(min);
});
