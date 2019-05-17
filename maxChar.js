// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const res = {};

  str.split('').forEach(char => (res[char] ? res[char]++ : (res[char] = 1)));

  let max = 0;
  let ltr = '';
  for (let char in res) {
    if (res[char] > max) {
      max = res[char];
      ltr = char;
    }
  }

  return [ltr, max];
}

const g = maxChar('aabbbccccd');

console.log(g);
