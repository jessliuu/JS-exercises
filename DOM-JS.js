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
