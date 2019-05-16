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
