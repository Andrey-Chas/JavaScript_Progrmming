function findGreater() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let num3 = document.getElementById("number3").value;

    let numbers = [];
    numbers[0] = num1;
    numbers[1] = num2;
    numbers[2] = num3;

    const x = 10;

    let bigger = x > num1 ? x : num1;
    document.getElementById("result").innerHTML = "Comparing " + x + " and " + num1 + " we found the " + bigger + " is greater";
}