// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.


// × 9/5 + 32 = Celsius to F

//  × 1.8 + 32 F to C


//  Convert temperature entered to Celsius and write to paragraph block element //

// function toCelsius (number) {
//   number = (number * 9/5) + 32;
//   document.getElementById("fillMe").innerHTML = "<p>" + number + "</p";
//   if (number > 32) {
//     document.getElementById("fillMe").style.color = "red";

//   } else if (number < 0) {
//     document.getElementById("fillMe").style.color = "blue";

//   } else {
//     document.getElementById("fillMe").style.color = "green";
//   }
// }


// //  Convert temperature entered to Fahrenheit and write to paragraph block element in a color depending on the input //


// function toFahrenheit (number) {
//   number = (number * 1.8) + 32;
//   document.getElementById("fillMe").innerHTML = "<p>" + number + "</p";
//   if (number > 90) {
//     document.getElementById("fillMe").style.color = "red";

//   }
//   else if (number < 32) {
//     document.getElementById("fillMe").style.color = "blue";


//   } else {
//     document.getElementById("fillMe").style.color = "green";
//   }
// }

// //  ID the clear button //

// var clearButton = document.getElementById("clear");

// //  when click event occures, run the clearTheField function //

// clearButton.addEventListener("click", clearTheField);


// function clearTheField () {
// document.getElementById("temperature").reset();
// }


// // Get a reference to the button element in the DOM
// var button = document.getElementById("converter");


// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);


// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);
//   if (document.getElementById("celsius").checked) {
//     toCelsius(number);

// }
// else if (document.getElementById("fahrenheit").checked) {
//   toFahrenheit(number);
//   else {
//     return false;
//   }

// }
// }



//  still have to figure out the Enter key //

//example to try that WORKS //


// FUNCTIONS FOR CONVERTING CELSIUS AND FAHRENHEIT
function toCelsius( temperature ) {
  var convertedTemp = ( ( ( temperature - 32 ) * 5 ) / 9 );
  if ( convertedTemp <= 0 ) {
    document.getElementById("convertedTemp").style.color = 'blue';
  } else if ( convertedTemp >= 32 ) {
    document.getElementById("convertedTemp").style.color = 'red';
  } else {
    document.getElementById("convertedTemp").style.color = 'green';
  }
  return convertedTemp;
}

function toFahrenheit( temperature ) {
  var convertedTemp = ( ( ( temperature * 9 ) / 5 ) + 32 )
  if ( convertedTemp <= 32 ) {
    document.getElementById("convertedTemp").style.color = 'blue';
  } else if ( convertedTemp >= 90 ) {
    document.getElementById("convertedTemp").style.color = 'red';
  } else {
    document.getElementById("convertedTemp").style.color = 'green';
  }
  return convertedTemp;
}

// EVENT HANDLER FOR CONVERT BUTTON
var convert = document.getElementById("convertButton");
convert.addEventListener("click", determineConverter);

// FUNCTION FOR DETERMINING WHICH CONVERSION WILL HAPPEN
function determineConverter( event ) {
  // event.preventDefault(); nullifies page reset.
  event.preventDefault();
  var temperature = document.getElementById("temp").value;
  if ( document.getElementById("fahrenheit").checked ) {
    var newTemp = toFahrenheit( temperature );
    document.getElementById("convertedTemp").innerHTML = newTemp;
  } else if ( document.getElementById("celsius").checked ) {
    var newTemp = toCelsius( temperature );
    document.getElementById("convertedTemp").innerHTML = newTemp;
  } else {
    alert("Please pick a conversion type.");
  }
}

// FUNCTION AND EVENT HANDLER FOR PAGE RESET
function resetFields() {
  document.getElementById("convertedTemp").innerHTML = '';
}

var reset = document.getElementById("resetButton");
reset.addEventListener("click", resetFields);