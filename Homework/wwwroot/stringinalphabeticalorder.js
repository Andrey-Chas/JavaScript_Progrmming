var str = "webmster";

function strInAlphabeticalOrder() {
    var arr = [];

    for (var index in str) {
        arr.push(str[index]);
    }

    return arr = arr.sort().join("");
}

document.getElementById("initialStr").innerHTML = str;
document.getElementById("result").innerHTML = strInAlphabeticalOrder();