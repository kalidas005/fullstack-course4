(function (window) {
var ramugreeter={};
ramugreeter.name="Ramu";
var greeting=" Hi ";
ramugreeter.sayHi=function () {
	console.log(greeting +ramugreeter.name);
}  

window.ramugreeter=ramugreeter;

})(window);