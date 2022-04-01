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
