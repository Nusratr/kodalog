/*
 * Kodalog Javascript Console Plugin
 * Start : 2016-08-19 23:41
*/

(function () {
	function newError(err, url, lineNum) {
		var klConsoleDiv = document.querySelector(".kl-console").querySelector(".kl-console-result");
		var newErr = document.createElement("div");
		newErr.className = "kl-console-error";
		newErr.innerHTML = "<p>" + err + "</p><span>" + url + ":" + lineNum + "</span>";
		klConsoleDiv.appendChild(newErr);
	}
	function newLog(msg) {
		var klConsoleDiv = document.querySelector(".kl-console").querySelector(".kl-console-result");
		var newErr = document.createElement("div");
		newErr.className = "kl-console-log";
		newErr.innerHTML = "<p>" + msg + "</p><span></span>";
		klConsoleDiv.appendChild(newErr);
	}
	function newWarn(msg) {
		var klConsoleDiv = document.querySelector(".kl-console").querySelector(".kl-console-result");
		var newErr = document.createElement("div");
		newErr.className = "kl-console-warn";
		newErr.innerHTML = "<p>" + msg + "</p><span></span>";
		klConsoleDiv.appendChild(newErr);
	}
	function newInfo(msg) {
		var klConsoleDiv = document.querySelector(".kl-console").querySelector(".kl-console-result");
		var newErr = document.createElement("div");
		newErr.className = "kl-console-info";
		newErr.innerHTML = "<p>" + msg + "</p><span></span>";
		klConsoleDiv.appendChild(newErr);
	}
	window.onerror = function (err, url, lineNum) {
		kodalog(err, url, lineNum, "error");
	};
	nativeLog = console.log.bind(console);
	console.log = function (obj, url, lineNum) {
		nativeLog(obj);
		kodalog(obj, url, lineNum, "log");
	};
	console.warn = function (obj, url, lineNum) {
		nativeLog(obj);
		kodalog(obj, url, lineNum, "warn");
	};
	console.info = function (obj, url, lineNum) {
		nativeLog(obj);
		kodalog(obj, url, lineNum, "info");
	};
	console.error = function (obj, url, lineNum) {
		nativeLog(obj);
		kodalog(obj, url, lineNum, "error");
	};
	var kodalog = function (obj, url, lineNum, type) {
		if (type == "error") {
			newError(obj, url, lineNum);
		} else if (type == "log") {
			newLog(obj);
		} else if (type == "warn") {
			newWarn(obj);
		} else if (type == "info") {
			newInfo(obj);
		}
	};
	window.onload = function () {
		draggable('.kodalog-icon');
		
		document.querySelector('.kodalog-icon').addEventListener("mousedown", function () {
			begin = Date.now();
		});

		document.querySelector('.kodalog-icon').addEventListener("mouseup", function () {
			var end = Date.now();
			if (end-begin < 200){
				var kClass = document.querySelector('.kodalog').id;
				document.querySelector('.kodalog').id = kClass == "" ? "activeKodalog" : "";	
			}
		});
		document.querySelector('#klConsole').focus();
		document.querySelector('#klConsole').addEventListener("keydown", function (e) {
			if (e.keyCode == 13 && !e.shiftKey) {
				e.preventDefault();
			}
		});
	};

	var dragObj = null;
	function draggable(el) {
		var obj = document.querySelector(el);
		obj.style.position = "absolute";
		obj.onmousedown = function () {
			dragObj = obj;
		}
	}
	document.onmouseup = function (e) {
		dragObj = null;
	};
	document.onmousemove = function (e) {
		var x = e.pageX + -35;
		var y = e.pageY + -35;
		var pageHeight = window.innerHeight;
		var pageWidth = window.innerWidth;
		// console.log(x + " " + y);
		if (dragObj == null){
			return;
		}
		else if(x <= 1 || y <= 1){
			dragObj.style.left = x <= 1 ? "5px" : x+"px"; 
			dragObj.style.top = y <= 1 ? "5px" : y+"px";
			if(x >= (pageWidth-71)){
				dragObj.style.left = x >= (pageWidth-71) ? (pageWidth-74)+"px" : x+"px";
			}else if(y >= (pageHeight-71)){
				dragObj.style.top = y >= (pageHeight-71) ? (pageHeight-74)+"px" : y+"px";	
			}
		}else if(y >= (pageHeight-71) || x >= (pageWidth-71)){
			dragObj.style.top = y >= (pageHeight-71) ? (pageHeight-74)+"px" : y+"px";
			dragObj.style.left = x >= (pageWidth-71) ? (pageWidth-74)+"px" : x+"px";
		}else{
			dragObj.style.left = x + "px";
			dragObj.style.top = y + "px";
		}
	};
})();
