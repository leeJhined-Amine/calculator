function showResults (input){
    let output = document.getElementById("output");
    if (output.value == '0'){
        output.value = input;
        }
    else if(input == '+' || input =='-' || input == '*' || input == '.' || input =='/' ){
            
            if(output.value[output.value.length-1] != '+' && output.value[output.value.length-1] != '-' && output.value[output.value.length-1] != '*' && output.value[output.value.length-1] != '.' && output.value[output.value.length-1] != '/') {
                output.value += input;
            }
        
    }
    else{
        output.value += input;
    }
}
function clearDisplay(){
    output.value = '0';
}
function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(error){
        output.value='Error';
    }
}
function Delete(){
    const output = document.getElementById("output");
    output.value = output.value.slice(0,-1);
    egalClicked = trueK
}
