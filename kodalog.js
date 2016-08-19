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
		alert("asdasd");	
	};

})();