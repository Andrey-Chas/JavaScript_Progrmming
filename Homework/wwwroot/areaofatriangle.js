var num1 = 5;
var num2 = 6;
var num3 = 7;

function calculateAreaOfATriangle(num1, num2, num3) {
    var semiPerimeter = (num1 + num2 + num3) / 2;
    document.getElementById("result").innerHTML = "Area of a triangle with sides " + num1 + ", " + num2 + " and " + num3 + " is " + (semiPerimeter * (semiPerimeter - num1) * (semiPerimeter - num2) * (semiPerimeter - num3)) ** 0.5;
}