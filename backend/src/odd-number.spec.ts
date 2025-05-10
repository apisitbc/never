import { findOddNumber } from "./odd-number";

describe("findOdd", () => {
  test.each([
    [[7], 7],
    [[0], 0],
    [[1, 1, 2], 2],
    [[0, 1, 0, 1, 0], 0],
    [[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4],
  ])("findOdd(%j) should return %d", (input, expected) => {
    expect(findOddNumber(input)).toBe(expected);
  });
});
