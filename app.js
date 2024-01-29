// function showResults(){
//     let output = document.getElementById('output').value;
//     let result = parseInt(input.value);
//     output.value = result;
// }

// function calculate(input, operation){
//     let result = input.value 
// }

const output = document.getElementById("output");

function showResults (input){
    output.value += input;
}

function clearDisplay(){
    output.value = "";
}
function calculate(){
    display.value = parseFloat(display.value);
}
function Delete(){

}