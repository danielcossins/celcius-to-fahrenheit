/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/

function toCelsius (temp) {
  return ((temp-32)*5)/9;
}

function toFahrenheit (temp) {
  return (temp*9)/5 +32;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (e) {
  var output = "";
  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  var optionChosen = document.getElementsByName("conversion_type");
  //picks up the value in the text box and places it in the variable input
  var field = document.getElementById("input");
  var input = field.value;
  //console.log(field.value);
  // for loop
  for(var i=0; i<optionChosen.length; i++){
    if (optionChosen[i].checked && optionChosen[i].value === 'celsius') {
      output = toCelsius(input);
    }
    else if(optionChosen[i].checked && optionChosen[i].value === 'fahrenheit'){
      output = toFahrenheit(input);
    }
  }
  print(output);
  // end for loop
}
//prints out the correct number
function print(message){
  var output = document.getElementById("output");
  output.innerHTML = "Converted number: " + message;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;//();
