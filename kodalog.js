document.querySelector('.kodalog').addEventListener("click", function(){
	var kClass = document.querySelector('.kodalog-console').id;
	document.querySelector('.kodalog-console').id = kClass == "" ? "etkin" : "";
}, true);
