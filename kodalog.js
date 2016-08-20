/*
 * Kodalog Javascript Console Plugin
 * Start : 2016-08-19 23:41
*/

(function() {
	window.onerror = function(err) {
		kodalog(err);
	};
	nativeLog = console.log.bind(console);
	console.log = function (obj) {
		nativeLog(obj);
		kodalog(obj);
	};
	var kodalog = function(obj) {
		alert(obj);	
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
