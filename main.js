// //JS EXERCISES FROM CAB
// console.log("Starting javascript...");

// let myName = "Yuval Noah Harari";
// console.log(myName);

// let myAge = 32;
// console.log(myAge);

// let juliaAge = 32;
// let ageDiff = myAge - juliaAge;
// console.log(ageDiff);

// if (myAge > 21) {
//   console.log("You are older than 21");
// } else {
//   console.log("You are not older than 21");
// }

// if (myAge > juliaAge) {
//   console.log("You are older than Julia");
// } else if (myAge < juliaAge) {
//   console.log("You are younger than Julia");
// } else if (myAge === juliaAge) {
//   console.log("You and Julia are of the same age");
// }

// //arrays
// let myClassmates = [
//   "raul",
//   "ottavia",
//   "john",
//   "angelina",
//   "karolina",
//   "alejandro",
//   "jess",
//   "marta",
//   "arno",
// ];
// console.log(myClassmates.sort());

// let classmateAge = [27, 40, 44, 28, 34, 35];
// let i = 0;
// while (i < classmateAge.length) {
//   if (classmateAge[i] % 2 === 0) {
//     console.log(classmateAge[i]);
//     i += 1;
//   } else {
//     i += 1;
//   }
// }

// for (let i = 0; i < classmateAge.length; i++) {
//   console.log(classmateAge[i]);
// }

// //functions

// function minNum(arr) {
//   return Math.min(...arr);
// }
// console.log(minNum(classmateAge));

// function printIndexPosition(arr, index) {
//   return arr[index];
// }

// let myArr = [
//   3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
//   100,
// ];
// console.log(printIndexPosition(myArr, 2));

// function printRepeat(arr) {
//   let repeated = [];
//   for (i = 0; i < arr.length; i++) {
//     if (
//       arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) &&
//       repeated.includes(arr[i]) === false
//     ) {
//       repeated.push(arr[i]);
//     }
//   }
//   return repeated;
// }

// console.log(printRepeat(myArr));

// //Join all elements of the following array into a string.
// function joinArrElements(arr) {
//   return arr.toString();
// }

// let arrOfElements = ["Red", "Green", "White", "Black"];
// console.log(joinArrElements(arrOfElements));

// //Reverse a number
// function reverseNumber(num) {
//   let str = num.toString();
//   let reverseStr = "";
//   for (i = 0; i < str.length; i++) {
//     reverseStr = str[i] + reverseStr;
//   }
//   return parseInt(reverseStr);
// }

// console.log(reverseNumber(678679823));

// //returns a string in alphabetical order.
// function alphabeticalorder(str) {
//   return str.split("").sort().join("");
// }

// console.log(alphabeticalorder("webmaster"));

// //converts the first letter of every word to uppercase

// function uppercase(str) {
//   let arr = str.split(" ");
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   return arr.join(" ");
// }

// console.log(uppercase("hello world"));

// //finds the longest word in a phrase

// function longestWord(str) {
//   let arr = str.split(" ");
//   let longest = "";
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i];
//     }
//   }
//   return longest;
// }
// console.log(longestWord("hello world my name is Yuval Noah Harari"));

// //Extra: Function exercises

// function area() {
//   console.log(length * width);
// }

// var length = 10;
// var width = 20;
// area();

// function area2() {
//   return l * w;
// }

// var l = 4;
// var w = 200;
// console.log(area2());

// function area3(a, b) {
//   return a * b;
// }
// console.log(area3(7, 9));

// //determines the type of a triangle given the length of its three sides.
// function typeOfTriangle(a, b, c) {
//   if ((a === b) === c) {
//     console.log("I am a equilateral triangle");
//   } else if (a === b || b === c || c === a) {
//     console.log("I am an isosceles triangle");
//   } else {
//     console.log("I am a scalane triangle");
//   }
// }

// typeOfTriangle(2, 8, 9);

// //receives as a parameter an array of characters and replaces all "a" by "1". e.g.: JavaScript will become J1v1Script.
// function replaceA(str) {
//   newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       newStr += "1";
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(replaceA("Javascript"));

// //sum all elements of an array
// function sumElements(arr) {
//   sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumElements([1, 2, 3, 4]));

// //find smallest number of an array
// function smallest(arr) {
//   let smaller = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smaller) {
//       smaller = arr[i];
//     }
//   }
//   return smaller;
// }

// console.log(smallest([1, 2, 3, 0]));

// //adds the even numbers of an array
// function addEven(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(addEven([3, 6, 67, 6, 23, 11, 100, 8]));

// //adds the even positions of an array
// function addEvenPosition(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(addEvenPosition([3, 6, 67, 6, 23, 11, 100, 8]));

// //by sending a number as parameter, tells you all the even numbers before it
// function findEvenBefore(n) {
//   let arr = [];
//   for (let i = n; i >= 0; i--) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(findEvenBefore(9));

// //by sending two numbers as parameters, it tells you the odd numbers between these.
// function findOddBetween(x, y) {
//   let arr = [];
//   let smaller = Math.min(x, y);
//   let larger = Math.max(x, y);
//   for (let i = smaller; i <= larger; i++) {
//     if (i % 2 !== 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(findOddBetween(13, 1));

// // OTHER JS EXERCISES

// //Have the function BracketMatcher(str) take the str parameter being passed and return 1
// //if the brackets are correctly matched and each one is accounted for.Otherwise return 0.
// //For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0
// //because the brackets do not correctly match up.Only "(" and ")" will be used as brackets.If str contains no brackets return 1.

// function BracketMatcher(str) {
//   left = 0;
//   output = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") {
//       left += 1;
//     } else if (str[i] === ")" && left !== 0) {
//       left -= 1;
//     } else if (str[i] === ")" && left === 0) {
//       output += 1;
//     }
//   }

//   return left !== 0 || output !== 0 ? 0 : 1;
// }

// console.log(BracketMatcher("((())dd)()()()e(e)"));

// //Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if
// //the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.
// //The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome.
// //For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

// function PalindromeTwo(str) {
//   str = str.match(/[a-z]/gi).join("").toLowerCase();
//   rev = str.split("").reverse().join("");
//   return str === rev;
// }

// console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));

// ///Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain
// //only alphabetic characters and spaces, and return the first non - repeating character.For example:
// //if str is "agettkgaeee" then your program should return k.The string will always contain at least one character and
// //there will always be at least one non - repeating character.

// function NonrepeatingCharacter(str) {
//   for (let i = 0; i < str.length; i++) {
//     char = str[i];
//     remainingStr1 = str.slice(0, i);
//     remainingStr2 = str.slice(i + 1);
//     if (!remainingStr1.includes(char) && !remainingStr2.includes(char)) {
//       return char;
//     }
//   }
// }

// console.log(NonrepeatingCharacter("agettkgaeee"));

// //Have the function DistinctCharacters(str) take the str parameter being passed and determine if it contains at least 10 distinct characters,
// //if so, then your program should return the string true, otherwise it should return the string false.For example: if str is "abc123kkmmmm?"
// //then your program should return the string false because this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.

// function DistinctCharacters(str) {
//   distinctChars = "";

//   for (let i = 0; i < str.length; i++) {
//     if (distinctChars.includes(str[i])) {
//       distinctChars = distinctChars;
//     } else {
//       distinctChars += str[i];
//     }
//   }

//   return distinctChars.length >= 10;
// }

// console.log(DistinctCharacters("abc123kkmmmm?"));

// //Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
// //the first element will represent a list of comma - separated numbers sorted in ascending order, the second element will
// //represent a second list of comma - separated numbers(also sorted).Your goal is to return a comma - separated string containing
// //the numbers that occur in elements of strArr in sorted order.If there is no intersection, return the string false.

// function FindIntersection(strArr) {
//   arr0 = strArr[0].split(", ");
//   arr1 = strArr[1].split(", ");
//   newArr = [];

//   for (let i = 0; i < arr0.length; i++) {
//     if (arr1.includes(arr0[i])) {
//       newArr.push(arr0[i]);
//     }
//   }

//   if (newArr.length === 0) {
//     return false;
//   }

//   return newArr.join(",");
// }

// console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

// //Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing
// // sequence where each element in the array is greater than the sum of all previous elements.The array will only consist of positive
// //integers.For example: if arr is[1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing
// //sequence.If a superincreasing sequence isn't formed, then your program should return the string "false"

// function Superincreasing(arr) {
//   let tempSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (tempSum >= arr[i]) {
//       return false;
//     }
//     tempSum += arr[i];
//   }
//   return true;
// }

// console.log(Superincreasing([1, 3, 6, 13, 54]));

// //Have the function RemoveBrackets(str) take the str parameter being passed, which will contain only
// //the characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string
// //of correctly matched brackets
// function RemoveBrackets(str) {
//   firstOpening = str.indexOf("(");
//   bracketsToRemove = firstOpening;
//   left = 0;

//   for (let i = firstOpening; i < str.length; i++) {
//     if (str[i] === "(") {
//       left++;
//     } else if (str[i] === ")" && left > 0) {
//       left--;
//     } else if (str[i] === ")" && left === 0) {
//       bracketsToRemove++;
//     }
//   }
//   return bracketsToRemove + Math.abs(left);
// }

// console.log(RemoveBrackets("(()))"));

// //Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
// //For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.

// function FirstFactorial(num) {
//   product = 1;
//   for (let i = num; i > 0; i--) {
//     product *= i;
//   }

//   return product;
// }

// //Have the function SimpleAdding(num) add up all the numbers from 1 to num.

// function SimpleAdding(num) {
//   sum = 0;
//   for (let i = num; i > 0; i--) {
//     sum += i;
//   }
//   return sum;
// }
// //Have the function AlphabetSoup(str) take the str string parameter being passed
// //and return the string with the letters in alphabetical order(ie.hello becomes ehllo).
// //Assume numbers and punctuation symbols will not be included in the string.

// function AlphabetSoup(str) {
//   let newStr = str.split("");
//   newStr.sort();
//   return newStr.join("");
// }

// //Have the function TimeConvert(num) take the num parameter being passed and return the
// //number of hours and minutes the parameter converts to(ie.if num = 63 then the output should be 1: 3).
// //Separate the number of hours and minutes with a colon.

// function TimeConvert(num) {
//   let hour = Math.floor(num / 60);
//   let minutes = num % 60;
//   if (hour >= 1) {
//     return hour + ":" + minutes;
//   }
//   return 0 + ":" + minutes;
// }

// //Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
// //If there are two or more words that are the same length, return the first word from the string with that length.

// function LongestWord(sen) {
//   sen = sen.match(/[a-z0-9 ]/gi).join("");
//   arr = sen.split(" ");
//   longest = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i];
//     }
//   }
//   return longest;
// }

// //Have the function VowelCount(str) take the str string parameter being passed and return
// //the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8).
// function VowelCount(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       arr.push(str[i]);
//     }
//   }
//   return arr.length;
// }

// //Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
// //For example: if str is 454793 the output should be 4547 - 9 - 3.
// function DashInsert(str) {
//   let arr = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
//       arr[i] = arr[i] + "-";
//     }
//   }
//   return arr.join("");
// }

// //Have the function WordCount(str) take the str string parameter being passed and return the number of words
// //the string contains(e.g. "Never eat shredded wheat or cake" would return 6).

// function WordCount(str) {
//   return str.split(" ").length;
//   // code goes here
// }

// //Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is
// //"Hello World" the output should be hELLO wORLD.Let numbers and symbols stay the way they are.

// function SwapCase(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       newStr += str[i].toUpperCase();
//     } else if (str[i] === str[i].toUpperCase()) {
//       newStr += str[i].toLowerCase();
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// //Have the function ExOh(str) take the str parameter being passed and return the string true if
// //there is an equal number of x's and o's, otherwise return the string false.Only these two letters will be
// //entered in the string, no punctuation or numbers.For example: if str is "xooxxxxooxo" then the output should
// //return false because there are 6 x's and 5 o's.

// function ExOh(str) {
//   let exes = str.match(/x/gi) || [];
//   let ohes = str.match(/o/gi) || [];
//   // code goes here
//   return exes.length === ohes.length;
// }

// EXERCISES TO PRACTICE MAP, FILTER, REDUCE & FOREACH
// //Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// //Return the running sum of nums.
// var runningSum = function(nums) {
//   let sum = 0
//   let arr = nums.map(num=>{return sum += num})
//   return arr
// };
// console.log("runningSum", runningSum([1,2,3,4]))

//If the given input is an array of numbers, return the sum of all the positives ones. 
// If the array is empty or there aren't any positive numbers, return 0.
//initial value of 0 is important in this case
// const sumOfPositives = (arr) => {
// const sum = arr.filter(num => num > 0).reduce((a,b)=>a+b,0)
// return sum
// }
// console.log(sumOfPositives([-1,-1,-2,-3, -3,-4]))

//Square the value of every element in the array.
// const arrSquared = (arr) => {
//   return arr.map((num)=>num*num)
// }
// console.log(arrSquared([-1,-1,-2,-3, -3,-4]))

// Calculate the mean and median values of the number elements from the input array.

//console.log(meanMedian([12, 46, 32, 64]))

//Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
// const ageDiff = (arr) => {
//   const ages = arr.map(person => person.age)
//   return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
// }

// const input = [
//   {
//     name: 'John',
//     age: 13
//   },
//   {
//     name: 'Mark',
//     age: 56,
//   },
//   {
//     name: 'Rachel',
//     age: 45,
//   },
//   {
//     name: 'Nate',
//     age: 67,
//   },
//   {
//     name: 'Jeniffer',
//     age: 65,
//   }
// ];
// console.log(ageDiff(input))

// The given input is a string of multiple words with a single space between each of them. 
// Abbreviate the name and return the name initials.

// const nameInitials = (str) => {
//   return str.split(" ").map((name)=>name[0]).join('')
// }

// console.log(nameInitials("Maria Elizabeth Spencer"))

// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. 
// You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. 
// Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, 
// and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. 

// const numeronyms = (str) => {
// const words = str.split(" ")
// const arr = words.map((word)=> {
//   if (word.length>=4) {
//     return word[0] + (word.length-2) + word[word.length-1]
//   }
// return word}).join(' ')
// return arr
// }
// console.log(numeronyms("you are very nice"))

// Complete the below questions using this array:

const input = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that adds a "!" to each of the usernames

const addExPoint = (arr) => {
  const newArr = []
arr.forEach((person)=> newArr.push({...person, username: `${person.username}!`}))
return newArr
} 
// console.log(addExPoint(input))

// const newArrayForEach = []
// array.forEach(user => {
//   newArrayForEach.push({ ...user, username: `${user.username}!` })
// })

//Create an array using map that has all the usernames with a "? to each of the usernames

const addQuestionMark = (arr) => {
  const newArr = arr.map(person => ({...person, username: `${person.username}?`}))
  return newArr
}

// console.log(addQuestionMark(input))

//Filter the array to only include users who are on team: red

const teamRed = (arr) => {
  const newArr = arr.filter((person) => person.team === 'red'
  )
  return newArr
}

// console.log(teamRed(input))

//Find out the total score of all users using reduce

const totalScore = (arr) => {
  const score = arr.reduce((accumulator, person) => accumulator + person.score, 0)
  return score
}

// console.log(totalScore(input))

// create a new list with all user information, but add "!" to the end of each items they own.
// const addExPointToItems = (arr) => {
//   const newArr = arr.map(person=>({...person, items: person.items.map(item=>item+"!")}))
//   return newArr
// }
// console.log(addExPointToItems(input))

// create a new list with all user information, but add 20 to each Team Red person's score

// #1 Code below shows only Team Red users
const addScore1 = (arr) => {
  const newArr = arr.filter(person => person.team === 'red').map(person=>({...person, score: person.score+20}))
  return newArr
}

// console.log(addScore(input))

// #2 Code below shows all users

const addScore2 = (arr) => {
  const newArr = arr.map(person => 
    {if (person.team === 'red') {return ({...person, score: person.score+20}) }
   return person})
  return newArr
}

// console.log(addScore2(input))

