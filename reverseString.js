// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*if (str.length == 1) {
    return str;
  }

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1)); */

  return str.length == 1
    ? str
    : str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}
