var sizeArr = [7, 1.5, 20];
var areaArr = [];
areaArr.push(calcCircleArea(7));
areaArr.push(calcCircleArea(1.5));
areaArr.push(calcCircleArea(20));

for (var i = 0; i < areaArr.length; i++) {
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "The area of a circle with size " + sizeArr[i] + " is " + areaArr[i] + "<br />";
}

function calcCircleArea(r) {
    return Math.PI * r * r;
}