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

// console.log(lengthOfLongestSubstring1("pwwkew"));

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
    // console.log(seen);
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

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

const searchPosition = (arr, n) => {
  if (arr.indexOf(n) != -1) {
    return arr.indexOf(n);
  } else if (arr[0] > n) {
    return 0;
  } else if (arr.slice(-1) < n) {
    return arr.length;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < n && arr[i + 1] >= n) {
        return i + 1;
      }
    }
  }
};

const searchPosition1 = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  if (nums.indexOf(target) != -1) {
    return nums.indexOf(target);
  } else if (nums[0] > target) {
    return 0;
  } else if (nums.slice(-1) < target) {
    return nums.length;
  } else {
    while (low < high) {
      let mid = low + Math.floor((high - low) / 2);
      if (target > nums[mid]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }
};

// console.log(searchPosition([1, 2, 3, 14], 3));

//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Return 0 if needle is an empty string.
// var strStr = function (haystack, needle) {
//   if (!needle.length) return 0;
//   if (!haystack.includes(needle)) return -1;
//   return haystack.split(`${needle}`)[0].length;
// };

const strStr = (haystack, needle) => {
  if (needle === "" || needle === haystack) return 0; // the only mandatory check here is (needle === '')
  if (haystack.length < needle.length) return -1; // the other ones are for efficiency

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // start looping through haystack until the remaining substring is shorter than needle
    if (haystack[i] === needle[0]) {
      // as soon as we see a character that matches the first character of needle
      for (let j = 0; j < needle.length; j++) {
        // start looping through both needle and haystack
        if (needle[j] !== haystack[i + j]) {
          // as soon as the characters don't match
          break; // break out of the loop and return to looping through haystack
        } else if (j === needle.length - 1) {
          // otherwise, if we looped through the entire needle and all of the characters matched
          return i; // return the index of the first character of haystack with which we started the loop
        }
      }
    }
  }

  return -1; // return -1 if there wasn't a match
};

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  if (nums[low] === target) {
    return low;
  } else if (nums[high] === target) {
    return high;
  } else {
    while (low < high) {
      let mid = low + Math.floor((high - low) / 2);
      if (target === nums[mid]) {
        return mid;
      } else if (target > nums[mid]) {
        low = mid + 1;
      } else {
        high = mid + 1;
      }
    }
    return -1;
  }
};

var searcharr = [9, 12];
var searcharr1 = [12, 9];
var searcharr2 = [1, 3, 5, 12, 9, 6];
console.log(search(searcharr, 9));
console.log(search(searcharr1, 9));
console.log(search(searcharr2, 9));

// two sum: Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order
// find two numbers such that they add up to a specific target number.
var twoSum = function (numbers, target) {
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;

  if (numbers[pointer1] + numbers[pointer2] === target) {
    return [pointer1 + 1, pointer2 + 1];
  } else {
    while (pointer1 < pointer2) {
      let sum = numbers[pointer1] + numbers[pointer2];
      if (sum === target) {
        return [pointer1 + 1, pointer2 + 1];
      } else if (sum < target) {
        pointer1 += 1;
      } else {
        pointer2 -= 1;
      }
    }
  }
};

console.log(twoSum([1, 3, 5, 6, 9, 12], 21));

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
//Input: nums = [-4,-1,0,3,10] Output: [0,1,9,16,100]

var sortedSquares = function (nums) {
  let pointer1 = 0;
  let pointer2 = nums.length - 1;
  let res = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[pointer2]) > Math.abs(nums[pointer1])) {
      res[i] = nums[pointer2] ** 2;
      pointer2 -= 1;
    } else {
      res[i] = nums[pointer1] ** 2;
      pointer1 += 1;
    }
  }
  return res;
};
