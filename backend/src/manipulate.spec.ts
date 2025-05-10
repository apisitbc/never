import { manipulate } from "../src/manipulate";

describe("manipulate - unique permutations", () => {
  test.each([
    ["a", ["a"]],
    ["ab", ["ab", "ba"]],
    ["abc", ["abc", "acb", "bac", "bca", "cab", "cba"]],
    ["aabb", ["aabb", "abab", "abba", "baab", "baba", "bbaa"]],
  ])("manipulate(%s)", (input, expected) => {
    expect(manipulate(input)).toEqual(expected);
  });
});
