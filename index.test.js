const { test, expect } = require('@jest/globals');
const { shuffleArray, randomInRange } = require('./index.js');

test("Return empty array if n <= 0", () => {
    expect(shuffleArray(-1)).toStrictEqual([]);
});