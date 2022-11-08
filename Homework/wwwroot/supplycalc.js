var age1 = 18
var maxAge1 = 5821
var food1 = "chocolate"
var foodPerDay1 = 0.5;

calcSupply(age1, maxAge1, food1, foodPerDay1);

function calcSupply(age, maxAge, food, foodPerDay) {
    document.getElementById("age").innerHTML = age;
    document.getElementById("maxAge").innerHTML = maxAge;
    document.getElementById("food").innerHTML = food;
    document.getElementById("foodPerDay").innerHTML = foodPerDay;

    var calculatedSupply = (maxAge - age) * foodPerDay * 365;

    document.getElementById("result").innerHTML = calculatedSupply + "kg of " + food + " would be enough until I am " + maxAge + " years old.";
}