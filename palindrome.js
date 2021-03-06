// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (str.length == 1) {
    return true;
  } else if (str.length < 3) {
    return str[0] == str[1];
  }

  return str[0] == str[str.length - 1]
    ? palindrome(str.slice(1, str.length - 1))
    : false;
}

g = palindrome('12345321');

console.log(g);
