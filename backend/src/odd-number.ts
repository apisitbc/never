export function findOddNumber(numbers: number[]): number {
  const counts: Record<number, number> = {};

  for (const num of numbers) {
    counts[num] = (counts[num] || 0) + 1;
  }

  const num = findOddCount(counts);
  return num
}

function findOddCount(counts: Record<number, number>) {
  for (const num in counts) {
    if (counts[num] % 2 !== 0) {
      return Number(num);
    }
  }
  throw new Error("No number occurs an odd number of times");
}
