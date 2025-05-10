import { countSmileyFace } from "./smiley";

describe('countSmileys', () => {
  test.each([
    [[':)', ';(', ';}', ':-D'], 2],       
    [[';D', ':-(', ':-)', ';~)'], 3],      
    [[';]', ':[', ';*', ':$', ';-D'], 1],  
    [[':D', ';)', ';-)', ':-D'], 4],      
    [[':)', ':-)', ';)', ';-D'], 4],       
    [[':(', ';(', ';}', ':|'], 0],         
  ])('countSmileys(%j) should return %d', (input, expected) => {
    expect(countSmileyFace(input)).toBe(expected);
  });
});