function changeColour(value) {
    var colourArr = ["blue", "green", "yellow", "orange", "red"];
    var colourArrRandom = colourArr.sort(function () { return Math.random() - 0.5; });

    var cellLeft = document.getElementById("cellLeft");
    var cellMiddle = document.getElementById("cellMiddle");
    var cellRight = document.getElementById("cellRight");

    if (value == 1) {
        cellLeft.style.backgroundColor = colourArrRandom[0];
    }

    if (value == 2) {
        cellMiddle.style.backgroundColor = colourArrRandom[0];
    }

    if (value == 3) {
        cellRight.style.backgroundColor = colourArrRandom[0];
    }
}