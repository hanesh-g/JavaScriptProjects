let display = document.querySelector(".inputField");

function getElement(input){
    display.value += input;
}

function clearContent(){
    display.value = "";
}

function evaluateExpression(){
    display.value = eval(display.value);
}

function backspaceButton(){
    display.value = display.value.slice(0,-1);
}