'use strict';

function core() {
	// initialize tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
	});
}
        
$(document).ready(core);



function Main() {
  // shortcuts to DOM elements
  this.emailInput = document.getElementById('email');
  this.submitButton = document.getElementById('submit');

  // toggle for the button
  var buttonTogglingHandler = this.toggleButton.bind(this);
  this.emailInput.addEventListener('keyup', buttonTogglingHandler);
  this.emailInput.addEventListener('change', buttonTogglingHandler);
  
  var customValidationMessageHandler = this.setCustomValidationMessage.bind(this);
  this.emailInput.addEventListener('keyup', customValidationMessageHandler);
  this.emailInput.addEventListener('change', customValidationMessageHandler);
}

// enables or disables the submit button depending on 
// the values of the input fields
Main.prototype.toggleButton = function () {
  if (this.emailInput.value) {
    this.submitButton.removeAttribute('disabled');
  } else {
    this.submitButton.setAttribute('disabled', 'true');
  }
};

// custom validation message for 'email' form field
Main.prototype.setCustomValidationMessage = function () {
  if (this.emailInput.validity.typeMismatch) {
    this.emailInput.setCustomValidity("This field expects an e-mail");
  } else {
    this.emailInput.setCustomValidity("");
  }
};


// changing tab's title
var altTitle = "Feeling good!";
var originalTitle = document.title;

window.onblur = function () {
  document.title = altTitle;
}

window.onfocus = function () {
  document.title = originalTitle;
}

window.onload = function () {
  window.main = new Main();
};