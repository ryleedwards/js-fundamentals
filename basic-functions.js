/* ADD7 */

function add7(number) {
  return number + 7;
}

console.log(add7(3));

/* MULTIPLY */

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(8, 9));

/* CAPITALIZE */

function capitalize(word) {
  newWord = word.toLowerCase();
  newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1, newWord.length);
  return newWord;
}

console.log(capitalize("lowercase"));
console.log(capitalize("UPPERCASE"));
console.log(capitalize("BoTh"));

/* lastLetter */

function lastLetter(arg1) {
  return arg1.charAt(arg1.length - 1);
}

console.log(lastLetter("abcdefg"));
