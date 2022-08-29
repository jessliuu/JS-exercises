const maximumWealth1 = function (accounts) {
  const arr = [];
  for (let i = 0; i < accounts.length; i++) {
    let wealth = accounts[i].reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    arr.push(wealth);
  }
  return Math.max(...arr);
};

const maximumWealth2 = function (accounts) {
  const arr = accounts.map((account) =>
    account.reduce((acc, currentValue) => acc + currentValue, 0)
  );
  return Math.max(...arr);
};

const maximumWealthData = [
  [1, 2, 3, 7],
  [3, 2, 1],
  [6, 9],
];

// console.log(maximumWealth2(data))

var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }

  const newArr = arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString();
    }
  });
  return newArr;
};

//   console.log(fizzBuzz(10))

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//   console.log(twoSum([2,4,6, 5,15],20))

var canConstruct = function (ransomNote, magazine) {
  let ransomNoteLetters = ransomNote.split("");
  let magazineLetters = magazine.split("");

  for (let i = 0; i < ransomNoteLetters.length; i++) {
    if (!magazineLetters.includes(ransomNoteLetters[i])) {
      return false;
    } else magazineLetters.includes(ransomNoteLetters[i]);
    {
      let index = magazineLetters.indexOf(ransomNoteLetters[i]);
      magazineLetters.splice(index, 1);
    }
  }
  return true;
};

//   console.log(canConstruct("aab", "aab"))

var addTwoNumbers = function (l1, l2) {
  // let reverseL1 = []
  // for (let i=l1.length-1; i>=0; i--) {
  //     reverseL1.push(l1[i])
  // }
  //   let numL1 = parseInt(reverseL1.join(''))

  //   let reverseL2 = []
  //   for (let i=l2.length-1; i>=0; i--) {
  //       reverseL2.push(l2[i])
  //   }
  //     let numL2 = parseInt(reverseL2.join(''))

  let reverseL1 = l1.reverse().join("");
  let numL1 = parseInt(reverseL1);
  let reverseL2 = l2.reverse().join("");
  let numL2 = parseInt(reverseL2);

  return numL1 + numL2;
};

// console.log(addTwoNumbers([1,2,3,4], [1,2]))

// Return the unique values of an array using Set

const uniqueValues = (arr) => {
  let mySet = new Set(arr);
  let uniqueVals = [...mySet];
  return uniqueVals;
};

// console.log(uniqueValues([1,2,3,4,2,3,4,3]))

// Determine whether an array has duplicates using Set

const hasDuplicates = (arr) => {
  let mySet = new Set(arr);
  if (mySet.size !== arr.length) {
    return true;
  }
  return false;
};

// console.log(hasDuplicates([1, 2, 3, 4, 2, 3, 4, 3]));

// Write a function called vowelCount which accepts a string and returns a map
// where the keys are vowels and the values are the count of the vowels in the string.

const vowelCount = (string) => {
  let myMap = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);
  //   myMap.set();
  for (let i = 0; i < string.length; i++) {
    if ("aeiou".includes(string[i])) {
      myMap.set(string[i], myMap.get(string[i]) + 1);
    }
  }
  return myMap;
};

// console.log(vowelCount("I love ice cream"));

var lengthOfLongestSubstring1 = function (s) {
  var start = 0,
    maxLen = 0;
  var map = new Map();

  for (var i = 0; i < s.length; i++) {
    var ch = s[i];

    if (map.get(ch) >= start) start = map.get(ch) + 1;
    map.set(ch, i);
    console.log(map);
    if (i - start + 1 > maxLen) maxLen = i - start + 1;
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring1("pwwkew"));

// Commented version:
var lengthOfLongestSubstring2 = function (s) {
  // keeps track of the most recent index of each letter.
  const seen = new Map();
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start);
    seen.set(s[i], i);
    console.log(seen);
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

// console.log(lengthOfLongestSubstring2("pwwkew"));

// Given an integer x, return true if x is palindrome integer. Do not convert to string.

var isPalindrome = (x) => {
  if (x === 0 || (x > 0 && x < 10)) {
    return true;
  } else if (x < 0 || x % 10 === 0) {
    return false;
  } else {
    let revertedHalf = 0;
    while (x > revertedHalf) {
      revertedHalf = revertedHalf * 10 + (x % 10);
      console.log("revertedHalf", revertedHalf);
      x = Math.trunc(x / 10);
      console.log("x", x);
    }
    return x === revertedHalf || Math.trunc(revertedHalf / 10) === x;
  }
};

// console.log(isPalindrome(1));

//Given a roman numeral, convert it to an integer.

const romanToInt = (s) => {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    let current = map[s[i]];
    let next = map[s[i + 1]];
    if (current < next) {
      console.log("current", map[s[i]]);
      console.log("previous", map[s[i - 1]]);
      num -= current;
    } else {
      num += current;
    }
  }
  return num;
};

// console.log(romanToInt("IX"));

var mergeTwoLists = function (list1, list2) {
  mergedList = [...list1, ...list2];
  return mergedList.sort();
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
