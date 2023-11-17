var buttons = document.getElementsByClassName("block");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var second = "";


function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}



for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      
        var value = this.getAttribute('data-value');
        if (value != "=" && value != "+" && value != "-" && value != "*" && value != "/")
            second += value;

        else if (value != "=")
            second = "";
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent += value;
        } else if (value == "ac") {
            display.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        } else if (value == "=") {
            operand2 = parseFloat(second);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}


