// Reversing a string
function reverseString(str) {
  const reversedString = str.split('').reverse().join('');
  return reversedString;
}


// Descending Order
function descendingOrder(n) {
  let numArray = n.toString().split('');
  numArray = numArray.sort().reverse();
  numArray = numArray.join('');
  return +numArray;
}