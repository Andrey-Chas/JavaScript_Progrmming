function calculateKnots() {
    var num = Number(document.getElementById("number1").value);

    var convertedToKnots = num / 1.852;

    document.getElementById("result").innerHTML = convertedToKnots.toFixed(2);
}