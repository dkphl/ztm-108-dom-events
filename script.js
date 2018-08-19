var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function checkInputLength() {
	return input.value.length;
}

function addDoneButton () { 
	var doneButton = document.createElement('button');
	doneButton.textContent = "Mark Done";
	doneButton.className = "doneButton";
	doneButton.addEventListener("click", function() {
		doneButton.parentElement.classList.toggle('done');
	});
	return doneButton;
}

function addDeleteButton () { 
	var deleteButton = document.createElement('button');
	deleteButton.textContent = "Delete";
	deleteButton.className = "deleteButton";
	deleteButton.addEventListener("click", function() {
		deleteButton.parentElement.parentElement.removeChild(deleteButton.parentElement);
	});
	return deleteButton;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(addDoneButton());
	li.appendChild(addDeleteButton());
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick () {
	if (checkInputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (checkInputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





