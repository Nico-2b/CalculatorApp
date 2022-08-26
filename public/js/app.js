window.addEventListener("DOMContentLoaded", function() {

const allNumpads = document.querySelectorAll(".numpad__button");
const screen = document.querySelector(".screen__arguments");
const screenCalc = document.querySelector(".screen__calcul");
var calc = "";
var afterEqual = false;
var afterOperator = false;


function implemantScreen(a) {
const v = screen.textContent;
if(a ==="." && v.includes(".")) return;
screen.innerText = v + a;
}
function deleteLastNumber() {
let v = screen.textContent;
v = v.slice(0, -1);
screen.innerText = v;
}
function resetScreen() {
    screen.innerText = "";
}
function resetScreenCalc() {
    screenCalc.innerText = "";
    calc = '';
}

function implemantCalcul() {
screenCalc.innerHTML = calc;
}

function resetAll() {
calc = "";
resetScreen();
resetScreenCalc();
}
function calcul() {
     return eval(calc);
}


allNumpads.forEach(e => {
    e.addEventListener("click", e => {
        const arg = e.target.textContent;
        switch(arg) {
            case "RESET": {
               resetAll();
            };
            break;
            case "=": {
                if(afterOperator) return;
                let a = parseFloat(screen.textContent) || "";
                    calc = calc + a;
                    resetScreen();
                    implemantScreen(calcul())
                    afterEqual = true;
                    resetScreenCalc();
                
            };
            break;
            case "DEL": {
                if(afterEqual) {
                    resetAll();
                    afterEqual = false;
                    
                } else if(afterOperator) {
                    return;
                } else {
                    deleteLastNumber();
                }
                    
            };
            break;
            case "+": 
            case "-": 
            case "/": 
            case "*": 
            {
                if(afterOperator)  {
                resetScreen();
                calc = calc.slice(0, -2) + " " + arg + " ";
                implemantCalcul(calc);
                } else {

                    afterOperator = true;
                    let a = parseFloat(screen.textContent) || "";
                    calc = calc + a + " " + arg + " ";
                    implemantCalcul(calc);
                }

            };
            break;
            default: {
                if(afterEqual && !afterOperator) {
                    resetAll();
                    afterEqual = false;
                    implemantScreen(arg)

                } else if(afterOperator){
                    resetScreen();
                    afterOperator = false;
                    afterEqual = false;
                    implemantScreen(arg);

                } else {
                    implemantScreen(arg);
                }
            }
            break;
        }

    
    })
})





















})