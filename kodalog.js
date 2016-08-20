(function() {
	function newError(err, url, lineNum){
		var klConsoleDiv = document.querySelector(".kl-console");
		var newErr = document.createElement("div");
		newErr.className = "kl-console-error";
		newErr.innerHTML = "<p>"+err+"</p><span>"+url+":"+lineNum+"</span>"; 
		klConsoleDiv.appendChild(newErr);
	}
	function newLog(msg){
		var klConsoleDiv = document.querySelector(".kl-console");
		var newErr = document.createElement("div");
		newErr.className = "kl-console-log";
		newErr.innerHTML = "<p>"+msg+"</p><span></span>"; 
		klConsoleDiv.appendChild(newErr);
	}
	window.onerror = function(err, url, lineNum) {
		kodalog(err, url, lineNum);
	};
	nativeLog = console.log.bind(console);
	console.log = function(obj, url, lineNum) {
		nativeLog(obj);
		kodalog(obj, url, lineNum);
	};
	var kodalog = function(obj, url, lineNum) {
		if(url && lineNum){ // eğer hata ise
			newError(obj, url, lineNum);
		}else{
			newLog(obj);
		}
	};
	window.onload = function () {
		document.querySelector('.kodalog-icon').addEventListener("click", function() {
			var kClass = document.querySelector('.kodalog').id;
			document.querySelector('.kodalog').id = kClass == "" ? "activeKodalog" : "";
		}, true);
		document.querySelector('.kl-console').addEventListener("click", function () {
			document.getElementById('klConsole').focus();
		}, true);
	};
})();