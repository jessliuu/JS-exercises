var paragraph1 = document.getElementById("para1");
console.log(paragraph1);

var paragraph2 = document.getElementById("para1");
console.log(paragraph2.textContent);

var header = document.querySelector("h1");
console.log(header);

//these two are the same
var ul = document.querySelector("ul");
console.log(ul);

var ul = document.querySelector(".list");
console.log(ul);

//if want content only:
console.log(ul.textContent);

//these two are the same
var li = document.querySelectorAll("li");
console.log(li);

var liChildOfUl = document.querySelectorAll("ul > li");
console.log(liChildOfUl);

//if want content only:
li.forEach((item) => {
  console.log(item);
});

//How to create new elements
let unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);

let listItem1 = document.createElement("li");
listItem1.textContent = "It's free";
unorderedList.appendChild(listItem1);
let listItem2 = document.createElement("li");
listItem2.textContent = "It's awesome";
unorderedList.appendChild(listItem2);

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  alert("This page will be reset");
});

let submitButton = document.createElement("button");
document.body.appendChild(submitButton);
submitButton.id = "submit";
submitButton.type = "submit";
submitButton.style.width = "200px";
submitButton.style.height = "100px";
submitButton.textContent = "Click to submit";

submitButton.addEventListener("click", function () {
  alert("Thank you for clicking me");
});
//How to change inline CSS styles
let blueP = document.querySelector("ul");
blueP.style.color = "blue";

//JS EXERCISES FROM CAB
console.log("Starting javascript...");

let myName = "Yuval Noah Harari";
console.log(myName);

let myAge = 32;
console.log(myAge);

let juliaAge = 32;
let ageDiff = myAge - juliaAge;
console.log(ageDiff);

if (myAge > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}

if (myAge > juliaAge) {
  console.log("You are older than Julia");
} else if (myAge < juliaAge) {
  console.log("You are younger than Julia");
} else if (myAge === juliaAge) {
  console.log("You and Julia are of the same age");
}

//arrays
let myClassmates = [
  "raul",
  "ottavia",
  "john",
  "angelina",
  "karolina",
  "alejandro",
  "jess",
  "marta",
  "arno",
];
console.log(myClassmates.sort());

let classmateAge = [27, 40, 44, 28, 34, 35];
let i = 0;
while (i < classmateAge.length) {
  if (classmateAge[i] % 2 === 0) {
    console.log(classmateAge[i]);
    i += 1;
  } else {
    i += 1;
  }
}

for (let i = 0; i < classmateAge.length; i++) {
  console.log(classmateAge[i]);
}

//functions

function minNum(arr) {
  return Math.min(...arr);
}
console.log(minNum(classmateAge));

function printIndexPosition(arr, index) {
  return arr[index];
}

let myArr = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
console.log(printIndexPosition(myArr, 2));

function printRepeat(arr) {
  let repeated = [];
  for (i = 0; i < arr.length; i++) {
    if (
      arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) &&
      repeated.includes(arr[i]) === false
    ) {
      repeated.push(arr[i]);
    }
  }
  return repeated;
}

console.log(printRepeat(myArr));

//Join all elements of the following array into a string.
function joinArrElements(arr) {
  return arr.toString();
}

let arrOfElements = ["Red", "Green", "White", "Black"];
console.log(joinArrElements(arrOfElements));

//Reverse a number
function reverseNumber(num) {
  let str = num.toString();
  let reverseStr = "";
  for (i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr;
  }
  return parseInt(reverseStr);
}

console.log(reverseNumber(678679823));

//returns a string in alphabetical order.
function alphabeticalorder(str) {
  return str.split("").sort().join("");
}

console.log(alphabeticalorder("webmaster"));

//converts the first letter of every word to uppercase

function uppercase(str) {
  let arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

console.log(uppercase("hello world"));

//finds the longest word in a phrase

function longestWord(str) {
  let arr = str.split(" ");
  let longest = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longestWord("hello world my name is Yuval Noah Harari"));

//Extra: Function exercises

function area() {
  console.log(length * width);
}

var length = 10;
var width = 20;
area();

function area2() {
  return l * w;
}

var l = 4;
var w = 200;
console.log(area2());

function area3(a, b) {
  return a * b;
}
console.log(area3(7, 9));

//determines the type of a triangle given the length of its three sides.
function typeOfTriangle(a, b, c) {
  if ((a === b) === c) {
    console.log("I am a equilateral triangle");
  } else if (a === b || b === c || c === a) {
    console.log("I am an isosceles triangle");
  } else {
    console.log("I am a scalane triangle");
  }
}

typeOfTriangle(2, 8, 9);

// OTHER JS EXERCISES

//Have the function BracketMatcher(str) take the str parameter being passed and return 1
//if the brackets are correctly matched and each one is accounted for.Otherwise return 0.
//For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0
//because the brackets do not correctly match up.Only "(" and ")" will be used as brackets.If str contains no brackets return 1.

function BracketMatcher(str) {
  left = 0;
  output = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      left += 1;
    } else if (str[i] === ")" && left !== 0) {
      left -= 1;
    } else if (str[i] === ")" && left === 0) {
      output += 1;
    }
  }

  return left !== 0 || output !== 0 ? 0 : 1;
}

console.log(BracketMatcher("((())dd)()()()e(e)"));

//Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if
//the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.
//The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome.
//For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

function PalindromeTwo(str) {
  str = str.match(/[a-z]/gi).join("").toLowerCase();
  rev = str.split("").reverse().join("");
  return str === rev;
}

console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));

///Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain
//only alphabetic characters and spaces, and return the first non - repeating character.For example:
//if str is "agettkgaeee" then your program should return k.The string will always contain at least one character and
//there will always be at least one non - repeating character.

function NonrepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    remainingStr1 = str.slice(0, i);
    remainingStr2 = str.slice(i + 1);
    if (!remainingStr1.includes(char) && !remainingStr2.includes(char)) {
      return char;
    }
  }
}

console.log(NonrepeatingCharacter("agettkgaeee"));

//Have the function DistinctCharacters(str) take the str parameter being passed and determine if it contains at least 10 distinct characters,
//if so, then your program should return the string true, otherwise it should return the string false.For example: if str is "abc123kkmmmm?"
//then your program should return the string false because this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.

function DistinctCharacters(str) {
  distinctChars = "";

  for (let i = 0; i < str.length; i++) {
    if (distinctChars.includes(str[i])) {
      distinctChars = distinctChars;
    } else {
      distinctChars += str[i];
    }
  }

  return distinctChars.length >= 10;
}

console.log(DistinctCharacters("abc123kkmmmm?"));

//Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
//the first element will represent a list of comma - separated numbers sorted in ascending order, the second element will
//represent a second list of comma - separated numbers(also sorted).Your goal is to return a comma - separated string containing
//the numbers that occur in elements of strArr in sorted order.If there is no intersection, return the string false.

function FindIntersection(strArr) {
  arr0 = strArr[0].split(", ");
  arr1 = strArr[1].split(", ");
  newArr = [];

  for (let i = 0; i < arr0.length; i++) {
    if (arr1.includes(arr0[i])) {
      newArr.push(arr0[i]);
    }
  }

  if (newArr.length === 0) {
    return false;
  }

  return newArr.join(",");
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

//Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing
// sequence where each element in the array is greater than the sum of all previous elements.The array will only consist of positive
//integers.For example: if arr is[1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing
//sequence.If a superincreasing sequence isn't formed, then your program should return the string "false"

function Superincreasing(arr) {
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (tempSum >= arr[i]) {
      return false;
    }
    tempSum += arr[i];
  }
  return true;
}

console.log(Superincreasing([1, 3, 6, 13, 54]));
