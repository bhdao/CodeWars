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
function powersOfTwo(n) {
  const output = [];
  for (let i = 0; i <= n; i++) {
    output.push(2 ** i)
  }
  return output;
}

//Number of People in the Bus
var number = function (busStops) {
  return busStops.reduce((acc, pass) => {
    acc += pass[0];
    acc -= pass[1];
    return acc
  }, 0);
  return acc;
}

//Highest Scoring Word
function high(x) {
  let highScore = { word: "I'm totally oregano", score: 0 };
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  const words = x.split(" ");
  words.forEach((word) => {
    let score = 0;
    word.split("").forEach((letter) => {
      score += alphabet.indexOf(letter) + 1;
    })
    if (score > highScore.score) {
      highScore.word = word;
      highScore.score = score;
    };
  });
  return highScore.word;
}

//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

//Replace With Alphabet Position
function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  let output = "";
  text.split('').forEach((letter) => {
    const numPosition = alphabet.indexOf(letter.toLowerCase()) + 1;
    const numString = numPosition.toString();
    if (output.length <= 0 && numString != "0") {
      output += numString;
    } else if (numString != "0") (
      output += ` ${numString}`
    );
  });

  return output;
}

//Find the odd int
function findOdd(A) {
  const oddInt = { num: "x", count: "y" };
  const sortedNums = A.sort();
  sortedNums.forEach((int) => {
    if (oddInt.num != int) {
      if (oddInt.count % 2 == 1) {
        return oddInt.num
      }
      oddInt.num = int;
      oddInt.count = 1;
    } else if (oddInt.num == int) {
      oddInt.count += 1;
    }
  });
  return oddInt.num;
}

//Complementary DNA
function DNAStrand(dna) {
  let output = "";
  dna.split('').forEach((seq) => {
    if (seq == "A") {
      output += "T";
    } else if (seq == "T") {
      output += "A";
    } else if (seq == "G") {
      output += "C";
    } else if (seq == "C") {
      output += "G"
    };
  }
  );
  return output;
}

//Grasshopper - Personalized Message
function greet(name, owner) {
  if (name == owner) {
    return "Hello boss";
  } else {
    return "Hello guest"
  }
}

//Calculate average
function find_average(array) {
  if (array.length > 0) {
    let sum = array.reduce((acc, val) => {
      return acc + val;
    });
    return sum / array.length;
  } else {
    return 0;
  }
}

//Beeramid
var beeramid = function (bonus, price) {
  const possibleBeers = bonus / price;
  if (possibleBeers <= 0) { return 0; }

  const max = { level: 0, beers: 0 };
  const calcBeerPerLevel = (levels) => {
    let totalBeers = 0;
    for (let i = 0; i <= levels; i++) {
      totalBeers += i ** 2;
    }
    return totalBeers;
  }

  while (max.beers < possibleBeers) {
    max.level += 1;
    max.beers = calcBeerPerLevel(max.level);
  }

  if (max.beers == possibleBeers) {
    return max.level;
  } else {
    return max.level - 1;
  }

}

//Your order, please
function order(words) {
  const splitWords = words.split(' ');
  let outputArr = [];
  splitWords.forEach((x, idx) => {
    for (let word of splitWords) {
      let idxPlus1 = idx + 1;
      if (word.includes(idxPlus1.toString())) {
        outputArr.push(word);
      }
    }
  });
  return outputArr.join(' ')
}

//Remove exclamation marks
function removeExclamationMarks(s) {
  return s.split('').filter((letter) => letter !== "!").join('');
}

//Abbreviate a Two Word Name
function abbrevName(name) {
  //This is cursed but I think it's *pretty funny*
  return `${name.split(' ')[0][0].toUpperCase()}.${name.split(' ')[1][0].toUpperCase()}`
}

//The Feast of Many Beasts
function feast(beast, dish) {
  if (beast[0] != dish[0]) {
    return false;
  }
  if (beast[beast.length - 1] != dish[dish.length - 1]) {
    return false;
  }
  return true;
}

//Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s * 10000 / 360);
}

//Transportation on vacation
function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50;
  } else if (d >= 3 && d < 7) {
    return (d * 40) - 20;
  } else {
    return d * 40;
  }
}

//Find the first non-consecutive number
function firstNonConsecutive(arr) {
  if (arr.length < 2) { return null };
  let currNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (!(currNum + 1 == arr[i])) {
      return arr[i];
    } else {
      currNum = arr[i];
    }
  }
  return null;
}

//Unique In Order
var uniqueInOrder = function (iterable) {
  const output = [];
  let last;
  [...iterable].forEach((val) => {
    if (last !== val) {
      output.push(val);
      last = val;
    }
  });
  return output;
}

//Lost Without a Map
function maps(x) {
  return x.map((x) => x * 2);
}

//Find the unique number
function findUniq(arr) {
  let sortedArr = arr.sort();
  if (sortedArr[0] == sortedArr[1]) {
    return sortedArr[sortedArr.length - 1];
  } else {
    return sortedArr[0];
  }
}

//A Needle in the Haystack
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

//Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 == p2) {
    return 'Draw!';
  }
  else if ((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors')) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
};

//Grasshopper - Grade book
function getGrade(s1, s2, s3) {
  let grade = (s1 + s2 + s3) / 3;
  if (grade >= 90 && grade <= 100) {
    return 'A';
  } else if (grade >= 80 && grade < 90) {
    return 'B'
  } else if (grade >= 70 && grade < 80) {
    return 'C'
  } else if (grade >= 60 && grade < 70) {
    return 'D'
  } else {
    return 'F'
  }
}

//Remove First and Last Character
function removeChar(str) {
  let splitString = str.split('');
  splitString.pop();
  splitString.shift();
  return splitString.join('');
};

//Calculate BMI
function bmi(weight, height) {
  let bmi = weight / (height ** 2);
  if (bmi > 30) {
    return 'Obese'
  } else if (bmi <= 30 && bmi > 25) {
    return 'Overweight'
  } else if (bmi <= 25 && bmi > 18.5) {
    return 'Normal'
  } else if (bmi <= 18.5) {
    return 'Underweight';
  };
};

//Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  if (operation == '+') {
    return value1 + value2;
  } else if (operation == '-') {
    return value1 - value2;
  } else if (operation == '*') {
    return value1 * value2;
  } else if (operation == '/') {
    return value1 / value2
  }
};

//Correct the mistakes of the character recognition software
function correct(string) {
  let split = string.split('');
  return split.reduce((acc, next) => {
    let can = next;
    switch (can) {
      case '5':
        return acc + "S";
        break;
      case '0':
        return acc + "O";
        break;
      case '1':
        return acc + "I";
        break;
      default:
        return acc + next;
    }
  }, '')
}