// JavaScript source code
var app = angular.module("calculatorApp", []);
app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl() {
    this.buttonClicked = function(button) {
        this.selectedOperation = button;
    }
    this.computeResult = function () {
        var number1 = parseFloat(this.input1);
        var number2 = parseFloat(this.input2);
        if (this.selectedOperation === "+") {
            this.resultValue = number1 + number2;
        }
        else if (this.selectedOperation === "-") {
            this.resultValue = number1 - number2;
        }
        else if (this.selectedOperation === "*") {
            this.resultValue = number1 * number2;
        }
        else if (this.selectedOperation === "/") {
            this.resultValue = number1 / number2;
        }
    }



}
