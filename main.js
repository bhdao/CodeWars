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

//Convert a String to a Number
const stringToNumber = function (str) {
  return +str;
}

//Roman Numerals Encoder
function solution(number) {
  let output = "";

  if (number > 3999) { return };

  if (number >= 1000) {
    while (number >= 1000) {
      number -= 1000;
      output += "M";
    }
  }

  if (number <= 999 && number >= 900) {
    number -= 900;
    output += "CM"
  }

  if (number > 499) {
    number -= 500;
    output += "D"
  };

  if (number <= 499 && number >= 400) {
    number -= 400;
    output += "CD";
  };

  if (number <= 399 && number >= 100) {
    while (number >= 100) {
      number -= 100;
      output += "C"
    }
  };

  if (number <= 99 && number >= 90) {
    number -= 90;
    output += "XC";
  }

  if (number <= 89 && number >= 50) {
    number -= 50;
    output += "L";
  }

  if (number <= 49 && number >= 40) {
    number -= 40;
    output += "XL";
  }

  if (number <= 39 && number >= 10) {
    while (number >= 10) {
      number -= 10;
      output += "X"
    }
  }

  if (number == 9) {
    number -= 9;
    output += "IX";
  } else if (number <= 8 && number >= 5) {
    number -= 5;
    output += "V"
  }

  if (number == 4) {
    number -= 4;
    output += "IV"
  }

  if (number <= 3 && number > 0) {
    while (number > 0) {
      number -= 1;
      output += "I";
    }
  }

  return output;
}
//^^^not very happy with this one LOL

//I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ];
  let pointer = 0;
  while (nbPetals > 1) {
    nbPetals -= 1;
    if (pointer == 5) {
      pointer = 0;
    } else {
      pointer += 1;
    }
  }

  return phrases[pointer];
}

//Categorize New Member
function openOrSenior(data){
  return data.map((e) => {
    let output = "";
    if(e[0] >= 55 && e[1] > 7) {
      output = "Senior";
    } else {
      output = "Open";
    };
    return output;
  })
}