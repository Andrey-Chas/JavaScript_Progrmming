function performSum() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);

    var option = document.getElementById("option").value;

    if (option == "sum") {
        document.getElementById("result").innerHTML = num1 + num2;
    }
    else if (option == "subtract") {
        document.getElementById("result").innerHTML = num1 - num2;
    }
    else if (option == "multiply") {
        document.getElementById("result").innerHTML = num1 * num2;
    }
    else if (option == "divide") {
        document.getElementById("result").innerHTML = num1 / num2;
    }
}