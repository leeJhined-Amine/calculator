function showResults (input){
    const output = document.getElementById("output");
    output.value += input;
}

function clearDisplay(){
    output.value = '';
}
function calculate(){
    output.value = eval(output.value);
}
function Delete(){
    const output = document.getElementById("output");
    output.value = output.value.slice(0,-1);
}