function addBands(myList) {
  for (i = 0; i < myList.length; i++) {
    let band = document.createElement("li");
    band.textContent = myList[i];
    document.getElementById("band-list").appendChild(band);
  }
}

addBands(["Dire Straits", "Kansas", "Beach Boys"]);

function addMultTable(rows, cols) {
  let tbl = document.createElement("table");
  for (let i = 1; i <= rows; i++) {
    let tableRow = tbl.insertRow();
    for (let j = 1; j <= cols; j++) {
      let tableCell = tableRow.insertCell();
      tableCell.style.backgroundColor = "lightgrey";
      tableCell.innerHTML = i * j;
    }
  }
  document.querySelector("h2").appendChild(tbl);
}
addMultTable(4, 8);

// function appendRow() {
//   var tbl = document.getElementById("table"), // table reference
//     row = tbl.insertRow(tbl.rows.length), // append table row
//     i; // insert table cells to the new row
//   for (i = 0; i < tbl.rows[0].cells.length; i++) {
//     createCell() row.insertCell(i));
//   }
// }

//basics
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
