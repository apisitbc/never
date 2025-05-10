export function manipulate(text: string): string[] {
  if (!text) return [];
  return Array.from(permute(text, ''));
}

function permute(remaining:string, path:string):Set<string>{
if (remaining.length === 0) {
    return new Set([path]);
  }

  const permutations = new Set<string>();

  for (let i = 0; i < remaining.length; i++) {
    const char = remaining[i];
    const rest = remaining.slice(0, i) + remaining.slice(i + 1);
    for (const perm of permute(rest, path + char)) {
      permutations.add(perm);
    }
  }

  return permutations;
}
