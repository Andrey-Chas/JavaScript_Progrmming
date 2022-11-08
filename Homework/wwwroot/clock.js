setInterval(clock, 1000);

function clock() {
    var setDateTime = new Date();

    var h = setDateTime.getHours();
    var m = setDateTime.getMinutes();
    var s = setDateTime.getSeconds();

    if (h < 10) {
        h = "0" + setDateTime.getHours();
    }
    if (m < 10) {
        m = "0" + setDateTime.getMinutes();
    }
    if (s < 10) {
        s = "0" + setDateTime.getSeconds();
    }

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}