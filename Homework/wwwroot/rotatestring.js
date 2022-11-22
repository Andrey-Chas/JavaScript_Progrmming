var str = "w3resource ";
var arr = [];

for (var index in str) {
    arr.push(str[index]);
}

setInterval(rotateString, 100);

function rotateString() {
    var letterToFirst = arr[arr.length - 1];
    arr.pop(letterToFirst);
    arr.unshift(letterToFirst);
    document.getElementById("result").innerHTML = arr.join("");
}