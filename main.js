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
function openOrSenior(data) {
  return data.map((e) => {
    let output = "";
    if (e[0] >= 55 && e[1] > 7) {
      output = "Senior";
    } else {
      output = "Open";
    };
    return output;
  })
}

// Grasshopper - Summation
var summation = function (num) {
  let output = 0;
  while (num > 0) {
    output += num;
    num -= 1;
  }
  return output;
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

//Even or Odd
function even_or_odd(number) {
  if (number % 2 != 0) {
    return "Odd"
  } else {
    return "Even"
  }
}

//Pete, the baker
function cakes(recipe, available) {
  let possible = 0;
  let recipeIngs = Object.keys(recipe);

  while (2 + 2 == 4) {
    for (let ing of recipeIngs) {
      if (!available.hasOwnProperty(ing)) {
        return possible;
      }
      available[ing] -= recipe[ing];
      if (available[ing] < 0) {
        return possible;
      }
    }
    possible += 1;
  };
}


//Find the vowels
function vowelIndices(word) {
  const output = [];
  word.split('').forEach((letter, id) => {
    if ("aeiouy".includes(letter.toLowerCase())) {
      output.push(id + 1);
    }
  });
  return output;
};

//Disemvowel Trolls
function disemvowel(str) {
  return str.split("").filter(e => !"aeiou".includes(e.toLowerCase())).join('');
}

//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() == "r") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`
  }
}

//Is this a triangle?
function isTriangle(a, b, c) {
  if (a == 0 || b == 0 || c == 0) {
    return false;
  } else if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}

//Sum of positive
function positiveSum(arr) {
  return arr.reduce(function (acc, val) {
    if (val > 0) {
      acc += val
    }
    return acc;
  }, 0)
}

//The Robber Language
function robberEncode(sentence) {
  let letters = sentence.split("");
  let newString = letters.reduce(function (acc, letter) {
    if ("BCDFGHJKLMNPQRSTVWXYZ".includes(letter.toUpperCase())) {
      let addVowel;
      if (letter == letter.toUpperCase()) {
        addVowel = "O"
      } else {
        addVowel = "o"
      }
      return acc += `${letter}${addVowel}${letter}`;
    }
    return acc += letter;
  }, "");
  return newString;
}

//Reverse words
function reverseWords(str) {
  let wordsArr = str.split(" ");
  let newString = "";
  while (wordsArr.length > 0) {
    wordsArr.shift().split().forEach((x) => {
      x.split("").reverse().forEach((y) => { newString += y; })
    })
    if (wordsArr.length > 0) {
      newString += " ";
    };
  };
  console.log(newString);
  return newString;

}

//Powers of 2
function powersOfTwo(n){
  const output = [];
  for (let i = 0; i <= n; i++){
    output.push(2**i)
  }
  return output;
}

//Number of People in the Bus
var number = function(busStops){
  return busStops.reduce((acc, pass)=>{
    acc+= pass[0];
    acc-= pass[1];
    return acc
  },0);
  return acc;  
}