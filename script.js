const add7 = (number) => {
  return number + 7;
}

const multiply = (x, y) => {
  return x * y;
}

const getFirstChar = (string) => {
  return string.substr(0,1);
}

const getTheRestOfString = (string) => {
  return string.substr(1);
}

const capitalize = (string) => {
  let firstChar = getFirstChar(string).toUpperCase();
  let restOfString = getTheRestOfString(string).toLowerCase();
  return `${firstChar}${restOfString}`;
  
}

//function last letter
const lastLetter = (string) => {
  return string.substr(-1, 1);
}

console.log(add7(7));
console.log(multiply(3,3));
console.log(capitalize('heLLo'));
console.log(lastLetter("abcgdtelk"));

