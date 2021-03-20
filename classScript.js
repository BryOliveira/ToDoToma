(document.getElementById("addBtn")).addEventListener("click", counter);

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
	var homework = document.getElementById("Homework").value;
	var dueDate = document.getElementById("Due Date").value;
	
	if(!homework || !dueDate) { //this doesn't work!
		alert("Please fill all the boxes");
		return;
	}
	
	var display = document.getElementById("display");
	
	var newRow = display.insertRow(row);
	
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	
	cell1.innerHTML = homework;
	cell2.innerHTML = dueDate
	
	row++; //this also doesn't work!
}
	