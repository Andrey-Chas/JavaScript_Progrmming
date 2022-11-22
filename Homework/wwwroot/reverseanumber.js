var num = "32118";

function reverseANumber() {
    var arr = [];

    for (var index in num) {
        arr.push(num[index]);
    }
    return arr = arr.reverse().join("");
}

document.getElementById("initialNum").innerHTML = num;
document.getElementById("result").innerHTML = reverseANumber();