(function (window) {
  var kalidasgreeter={};
  kalidasgreeter.name="Kalidas";
  var greeting=" Hello ";
  kalidasgreeter.sayHello= function () {
	console.log(greeting +kalidasgreeter.name);
  }

  window.kalidasgreeter=kalidasgreeter;

})(window);