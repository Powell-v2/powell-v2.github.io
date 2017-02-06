var main = function () {

	// initialize tooltip
	$(function () {
  	$('[data-toggle="tooltip"]').tooltip();
	});

	/* show message upon contact form submission
	$('form').submit(function () {
		$('#success_message').show('slow');
		return false;
	});
  */
};
        
$(document).ready(main);

var message = "Shocka!";
var original = document.title;

window.onblur = function () { document.title = message; }
window.onfocus = function () { document.title = original; }