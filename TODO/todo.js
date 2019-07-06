
function submit(){
	var inputvalue = document.getElementById("inputbar").value;
	var item = document.createElement("li");
	item.innerHTML = inputvalue;
	document.getElementById("ul").appendChild(item);//append mean attach//li element must be nested under ul element
	var button = document.createElement("button");
	item.appendChild(button);
	button.innerHTML="Clear";
	button.id ="butt";
	button.onclick = function clear(){
		item.removeChild(button);
		document.getElementById("ul").removeChild(item);
	}
	
}
