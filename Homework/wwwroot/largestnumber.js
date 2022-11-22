var numbers = [2, 5, 3];
var arr = [];

for (var i = 0; i < numbers.length; i++) {
    arr.push(numbers[i]);
}

var arrSorted = arr.sort(function (a, b) { return a - b });
document.getElementById("result").innerHTML = "The largest number from " + numbers + " is " + arrSorted[arr.length - 1];