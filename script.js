var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li");
 
 function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listItems.length;i++){

deleteButton();
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 



ul.onclick=function(event){
	var target = window.event.target;
	target.classList.toggle("done");
}

	


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var button=document.createElement("button");
	button.appendChild(document.createTextNode("Delete!"));
	li.appendChild(button);
	button.onclick=removeParent;
	

	///li.addEventListener("click",function(){
	//	var finished=this.classList.toggle("done");

	//})

}

	



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function createToggling(){
	document.querySelector("li").classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
 