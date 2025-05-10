export function countSmileyFace(texts: string[]) : number {
  const validSmile = /^[:;][-~]?[)D]$/;

  return texts.filter(text => validSmile.test(text)).length;
}