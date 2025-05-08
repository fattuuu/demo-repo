const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const subtract = document.querySelector('#subtract');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const add = document.querySelector('#add');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const equals = document.querySelector('#equals');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');

clear.addEventListener("click", clearFunction)

function clearFunction(){
    display.value = '';
}

divide.addEventListener("click", divideFunctione)

function divideFunctione(){
    display.value += '/';
}
multiply.addEventListener("click", multiplyFunctione)

function multiplyFunctione(){
    display.value += '*';
}
seven.addEventListener("click", sevenFunctione)

function sevenFunctione(){
    display.value += '7';
}

eight.addEventListener("click", eightFunctione)

function eightFunctione(){
    display.value += '8';
}
nine.addEventListener("click", nineFunctione)

function nineFunctione(){
    display.value += '9';
}

subtract.addEventListener("click", subtractFunctione)

function subtractFunctione(){
    display.value += '-';
}
four.addEventListener("click", fourFunctione)

function fourFunctione(){
    display.value += '4';
}
five.addEventListener("click", fiveFunctione)

function fiveFunctione(){
    display.value += '5';
}
six.addEventListener("click", sixFunctione)

function sixFunctione(){
    display.value += '6';
}
add.addEventListener("click", addFunctione)

function addFunctione(){
    display.value += '+';
}
one.addEventListener("click", oneFunctione)

function oneFunctione(){
    display.value += '1';
}
two.addEventListener("click", twoFunctione)

function twoFunctione(){
    display.value += '2';
}

three.addEventListener("click", threeFunctione)

function threeFunctione(){
    display.value += '3';
}
zero.addEventListener("click", zeroFunctione)

function zeroFunctione(){
    display.value += '0';
}
point.addEventListener("click", pointFunctione)

function pointFunctione(){
    display.value += '.';
}

equals.addEventListener("click", equalsFunctione)

function equalsFunctione(){

    try{
        display.value = eval(display.value);
    
    }
   
    catch{
        display.value = 'synyax error';
    }
}