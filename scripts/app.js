"use strict";


let firstNumber,
    action,
    secondNumber,
    resultOfAction,





    askFirstNumber = () => {
        firstNumber = +prompt("Enter first number (can't be zero)", "");
        if (firstNumber == 0 || isNaN(firstNumber)) {
            const askError = confirm("Error! First number can't be zero or a string! Re-enter the number?");
            if (!askError) {
                start();
            } else {
                askFirstNumber();
            }
        }
    },

    askAction = () => {
        let x = prompt("What action to take (-, +, /, *)", " ");
        do {
            if (x == "*" || x == "/" || x == "+" || x == "-") {
                action = x;
                break;
            } else {
                x = prompt("What action to take (-, +, /, *)", " ");
            }
        } while (x != "*" || x != "/" || x != "+" || x != "-");
    },

    askSecondNumber = () => {
        secondNumber = +prompt("Enter second number (can't be zero)", "");
        if (secondNumber == 0 || isNaN(secondNumber)) {
            const askError = confirm("Error! Second number can't be zero or a string! Re-enter the number?");
            if (!askError) {
                start();
            } else {
                askSecondNumber();
            }
        }
    },

    finish = (a, b, c) => {
        switch (b) {
            case "+":
                resultOfAction = a + c;
                break;

            case "-":
                resultOfAction = a - c;
                break;

            case "*":
                resultOfAction = a * c;
                break;

            case "/":
                resultOfAction = a / c;
                break;
            default:
                resultOfAction = 0;
                break;
        }
    },
    
    showResult = () => {
        let askAfterResult = confirm(`${firstNumber} ${action} ${secondNumber} = ${resultOfAction} Start over? `);
        if (askAfterResult) {
            start();
        }
    },

    start = () => {
        askFirstNumber();
        askAction();
        askSecondNumber();
        finish(firstNumber,action,secondNumber);
        showResult();
    }

;
start();




