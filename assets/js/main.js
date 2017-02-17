var main = function () {

	// initialize tooltip
	$(function () {
  	$('[data-toggle="tooltip"]').tooltip();
	});

};
        
$(document).ready(main);

// Changing Tab's Title

var message = "Feeling good!";
var original = document.title;

window.onblur = function () { document.title = message; }
window.onfocus = function () { document.title = original; }

// Custom validation message for 'email' form field

var email = document.getElementById("inputEmail");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("This field expects an e-mail");
  } else {
    email.setCustomValidity("");
  }
});