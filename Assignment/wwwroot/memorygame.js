var cards = document.querySelectorAll(".card");
var backSides = document.querySelectorAll(".back");
var sound = document.getElementById("scoreSound");
var imagesCounter = 1;
var pl1 = document.getElementById("pl1");
var pl2 = document.getElementById("pl2");
var pl3 = document.getElementById("pl3");
var pl4 = document.getElementById("pl4");
var turn = document.getElementById("turn");
var highestScore = 0;
var winner = null;
var winners = [];
var plCounter = 1;
var numberOfPl = 1;
var numberToFind = 0;
var playerMark = 0;
var size = null;
var type = null;
var playersNum = null;
var card = null;
var cardMatch = null;
var cardOnclick = null;
var cardMatchOnclick = null;
var imageElement = null;
var imageElementMatch = null;
var imageName = null;
var imageNameMatch = null;
var boardInactive = false;
var count = 0;
var players = [
    { "name": "John", "score": 0 },
    { "name": "Jack", "score": 0 },
    { "name": "Sally", "score": 0 },
    { "name": "Stella", "score": 0 }
]
var catsField1 = ["cats/cat1.jpg", "cats/cat1.jpg", "cats/cat2.jpg", "cats/cat2.jpg", "cats/cat3.jpg", "cats/cat3.jpg", "cats/cat4.jpg", "cats/cat4.jpg", "cats/cat5.jpg", "cats/cat5.jpg", "cats/cat6.jpg", "cats/cat6.jpg"];
var catsField2 = ["cats/cat1.jpg", "cats/cat1.jpg", "cats/cat2.jpg", "cats/cat2.jpg", "cats/cat3.jpg", "cats/cat3.jpg", "cats/cat4.jpg", "cats/cat4.jpg", "cats/cat5.jpg", "cats/cat5.jpg", "cats/cat6.jpg", "cats/cat6.jpg", "cats/cat7.jpg", "cats/cat7.jpg", "cats/cat8.jpg", "cats/cat8.jpg"];
var catsField3 = ["cats/cat1.jpg", "cats/cat1.jpg", "cats/cat2.jpg", "cats/cat2.jpg", "cats/cat3.jpg", "cats/cat3.jpg", "cats/cat4.jpg", "cats/cat4.jpg", "cats/cat5.jpg", "cats/cat5.jpg", "cats/cat6.jpg", "cats/cat6.jpg", "cats/cat7.jpg", "cats/cat7.jpg", "cats/cat8.jpg", "cats/cat8.jpg", "cats/cat9.jpg", "cats/cat9.jpg", "cats/cat10.jpg", "cats/cat10.jpg"];
var dogsField1 = ["dogs/dog1.jpg", "dogs/dog1.jpg", "dogs/dog2.jpg", "dogs/dog2.jpg", "dogs/dog3.jpg", "dogs/dog3.jpg", "dogs/dog4.jpg", "dogs/dog4.jpg", "dogs/dog5.jpg", "dogs/dog5.jpg", "dogs/dog6.jpg", "dogs/dog6.jpg"];
var dogsField2 = ["dogs/dog1.jpg", "dogs/dog1.jpg", "dogs/dog2.jpg", "dogs/dog2.jpg", "dogs/dog3.jpg", "dogs/dog3.jpg", "dogs/dog4.jpg", "dogs/dog4.jpg", "dogs/dog5.jpg", "dogs/dog5.jpg", "dogs/dog6.jpg", "dogs/dog6.jpg", "dogs/dog7.jpg", "dogs/dog7.jpg", "dogs/dog8.jpg", "dogs/dog8.jpg"];
var dogsField3 = ["dogs/dog1.jpg", "dogs/dog1.jpg", "dogs/dog2.jpg", "dogs/dog2.jpg", "dogs/dog3.jpg", "dogs/dog3.jpg", "dogs/dog4.jpg", "dogs/dog4.jpg", "dogs/dog5.jpg", "dogs/dog5.jpg", "dogs/dog6.jpg", "dogs/dog6.jpg", "dogs/dog7.jpg", "dogs/dog7.jpg", "dogs/dog8.jpg", "dogs/dog8.jpg", "dogs/dog9.jpg", "dogs/dog9.jpg", "dogs/dog10.jpg", "dogs/dog10.jpg"];
var dinosaursField1 = ["dinosaurs/dinosaur1.jpg", "dinosaurs/dinosaur1.jpg", "dinosaurs/dinosaur2.jpg", "dinosaurs/dinosaur2.jpg", "dinosaurs/dinosaur3.jpg", "dinosaurs/dinosaur3.jpg", "dinosaurs/dinosaur4.jpg", "dinosaurs/dinosaur4.jpg", "dinosaurs/dinosaur5.jpg", "dinosaurs/dinosaur5.jpg", "dinosaurs/dinosaur6.jpg", "dinosaurs/dinosaur6.jpg"];
var dinosaursField2 = ["dinosaurs/dinosaur1.jpg", "dinosaurs/dinosaur1.jpg", "dinosaurs/dinosaur2.jpg", "dinosaurs/dinosaur2.jpg", "dinosaurs/dinosaur3.jpg", "dinosaurs/dinosaur3.jpg", "dinosaurs/dinosaur4.jpg", "dinosaurs/dinosaur4.jpg", "dinosaurs/dinosaur5.jpg", "dinosaurs/dinosaur5.jpg", "dinosaurs/dinosaur6.jpg", "dinosaurs/dinosaur6.jpg", "dinosaurs/dinosaur7.jpg", "dinosaurs/dinosaur7.jpg", "dinosaurs/dinosaur8.jpg", "dinosaurs/dinosaur8.jpg"];
var dinosaursField3 = ["dinosaurs/dinosaur1.jpg", "dinosaurs/dinosaur1.jpg", "dinosaurs/dinosaur2.jpg", "dinosaurs/dinosaur2.jpg", "dinosaurs/dinosaur3.jpg", "dinosaurs/dinosaur3.jpg", "dinosaurs/dinosaur4.jpg", "dinosaurs/dinosaur4.jpg", "dinosaurs/dinosaur5.jpg", "dinosaurs/dinosaur5.jpg", "dinosaurs/dinosaur6.jpg", "dinosaurs/dinosaur6.jpg", "dinosaurs/dinosaur7.jpg", "dinosaurs/dinosaur7.jpg", "dinosaurs/dinosaur8.jpg", "dinosaurs/dinosaur8.jpg", "dinosaurs/dinosaur9.jpg", "dinosaurs/dinosaur9.jpg", "dinosaurs/dinosaur10.jpg", "dinosaurs/dinosaur10.jpg"];

function createGame() {
    document.getElementById("mainMenu").style.visibility = "collapse";
    document.getElementById("createGame").style.visibility = "visible";
}

function next() {
    document.getElementById("createGame").style.visibility = "collapse";
    document.getElementById("option1").setAttribute("selected", "selected");
    size = document.getElementById("size").value;
    if (size == "medium") {
        document.getElementById("option3").removeAttribute("hidden");
    }
    if (size == "large") {
        document.getElementById("option3").removeAttribute("hidden");
        document.getElementById("option4").removeAttribute("hidden");
    }
    type = document.getElementById("type").value;
    document.getElementById("numberOfPlayers").style.visibility = "visible";
}

function backToCreateGame() {
    document.getElementById("createGame").style.visibility = "collapse";
    document.getElementById("mainMenu").style.visibility = "visible";
}

function playerName() {
    document.getElementById("numberOfPlayers").style.visibility = "collapse";
    document.getElementById("nameOfPlayers").style.visibility = "visible";
    playersNum = document.getElementById("players").value;
    if (playersNum == "two") {
        document.getElementById("nameTwoPl").style.visibility = "visible";
    }
    if (playersNum == "three") {
        document.getElementById("nameTwoPl").style.visibility = "visible";
        document.getElementById("nameThreePl").style.visibility = "visible";
    }
    if (playersNum == "four") {
        document.getElementById("nameTwoPl").style.visibility = "visible";
        document.getElementById("nameThreePl").style.visibility = "visible";
        document.getElementById("nameFourPl").style.visibility = "visible";
    }
}

function backToNext() {
    document.getElementById("numberOfPlayers").style.visibility = "collapse";
    document.getElementById("createGame").style.visibility = "visible";
    document.getElementById("players").selectedIndex = 0;
    document.getElementById("option3").setAttribute("hidden", "hidden");
    document.getElementById("option4").setAttribute("hidden", "hidden");
}

function start() {
    document.getElementById("nameOfPlayers").style.visibility = "collapse";
    document.getElementById("playersTable").style.visibility = "visible";
    playersNum = document.getElementById("players").value;
    numberOfPl = 1;
    players[0].name = document.getElementById("n1").value;
    players[1].name = document.getElementById("n2").value;
    players[2].name = document.getElementById("n3").value;
    players[3].name = document.getElementById("n4").value;
    pl1.innerHTML = players[0].name + " Score: " + players[0].score;
    if (playersNum != "one") {
        turn.style.visibility = "visible";
        turn.innerHTML = "Turn: " + players[0].name;
        if (playersNum == "two") {
            numberOfPl = 2;
        }
        else if (playersNum == "three") {
            numberOfPl = 3;
        }
        else if (playersNum == "four") {
            numberOfPl = 4;
        }
        for (var i = 1; i < numberOfPl; i++) {
            i++;
            var pl = document.getElementById("pl" + i);
            i--;
            pl.style.visibility = "visible";
            pl.innerHTML = players[i].name + " Score: " + players[i].score;
        }
    }
    if (size == "small") {
        document.getElementById("field1").style.visibility = "visible";
        numberToFind = 6;
        if (type == "cats") {
            shuffleArray(catsField1);
            placeCards(catsField1);
        }
        else if (type == "dogs") {
            shuffleArray(dogsField1);
            placeCards(dogsField1);
        }
        else if (type == "dinosaurs") {
            shuffleArray(dinosaursField1);
            placeCards(dinosaursField1);
        }
    }
    else if (size == "medium") {
        document.getElementById("field1").style.visibility = "visible";
        document.getElementById("sMedium").style.visibility = "visible";
        cards.forEach(card => card.style.width = "110px");
        cards.forEach(card => card.style.height = "110px");
        numberToFind = 8;
        if (type == "cats") {
            shuffleArray(catsField2);
            placeCards(catsField2);
        }
        else if (type == "dogs") {
            shuffleArray(dogsField2);
            placeCards(dogsField2);
        }
        else if (type == "dinosaurs") {
            shuffleArray(dinosaursField2);
            placeCards(dinosaursField2);
        }
    }
    else if (size == "large") {
        document.getElementById("field1").style.visibility = "visible";
        document.getElementById("sMedium").style.visibility = "visible";
        document.getElementById("sLarge").style.visibility = "visible";
        cards.forEach(card => card.style.width = "100px");
        cards.forEach(card => card.style.height = "100px");
        numberToFind = 10;
        if (type == "cats") {
            shuffleArray(catsField3);
            placeCards(catsField3);
        }
        else if (type == "dogs") {
            shuffleArray(dogsField3);
            placeCards(dogsField3);
        }
        else if (type == "dinosaurs") {
            shuffleArray(dinosaursField3);
            placeCards(dinosaursField3);
        }
    }
}

function backToTheNumberOfPlayers() {
    document.getElementById("nameOfPlayers").style.visibility = "collapse";
    document.getElementById("numberOfPlayers").style.visibility = "visible";
    document.getElementById("nameTwoPl").style.visibility = "collapse";
    document.getElementById("nameThreePl").style.visibility = "collapse";
    document.getElementById("nameFourPl").style.visibility = "collapse";
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function flipCard() {
    if (boardInactive) {
        return;
    }
    this.classList.add("flipped");
    isMatch();
}

function unflipCard(firstCard, secondCard) {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
}

cards.forEach(card => card.addEventListener("click", flipCard));

function placeCards(array) {
    for (var i = 0; i < array.length; i++) {
        var image = document.getElementById("p" + imagesCounter);

        image.src = array[i];
        imagesCounter++;
    }
}

function addScore() {
    players[playerMark].score = players[playerMark].score + 1;
    playerMark++;
    document.getElementById("pl" + playerMark).innerHTML = players[playerMark - 1].name + " Score: " + players[playerMark - 1].score;
    playerMark--;
}

function changePlayer() {
    if (numberOfPl == 1) {
        return;
    }
    playerMark++;
    if (playerMark == numberOfPl) {
        playerMark = 0;
    }
    turn.innerHTML = "Turn: " + players[playerMark].name;
}

function takeImage(index) {
    if (count == 0) {
        card = document.getElementsByClassName("card").item(index);
        cardOnclick = card.getAttribute("onclick");
        imageElement = document.getElementsByClassName("back").item(index);
        imageName = imageElement.getAttribute("src");
        card.removeAttribute("onclick");
        count++;
    }
    else if (count == 1) {
        cardMatch = document.getElementsByClassName("card").item(index);
        cardMatchOnclick = cardMatch.getAttribute("onclick");
        imageElementMatch = document.getElementsByClassName("back").item(index);
        imageNameMatch = imageElementMatch.getAttribute("src");
        cardMatch.removeAttribute("onclick");
        count++;
    }
}

function isMatch() {
    if (imageName != null && imageNameMatch != null) {
        cards.forEach(card => card.removeEventListener("click", flipCard));
        boardInactive = true;
        if (imageName != imageNameMatch) {
            setTimeout(() => {
                changePlayer();
                unflipCard(card, cardMatch);
                card.setAttribute("onclick", cardOnclick);
                cardMatch.setAttribute("onclick", cardMatchOnclick);
                imageName = null;
                imageNameMatch = null;
                count = 0;
                cards.forEach(card => card.addEventListener("click", flipCard));
                boardInactive = false;
            }, 1000);
        }
        else {
            setTimeout(() => {
                numberToFind = numberToFind - 1;
                addScore();
                card.classList.add("fade");
                cardMatch.classList.add("fade");
                imageName = null;
                imageNameMatch = null;
                count = 0;
                cards.forEach(card => card.addEventListener("click", flipCard));
                boardInactive = false;
                if (numberToFind == 0) {
                    setTimeout(() => {
                        win();
                    }, 1000);
                }
            }, 1000);
        }
    }
}

function win() {
    document.getElementById("field1").style.visibility = "collapse";
    document.getElementById("playersTable").style.visibility = "collapse";
    document.getElementById("win").style.visibility = "visible";
    document.getElementById("message").innerHTML = "Congratulations!";
    players.sort(function (a, b) { return b.score - a.score });
    winner = players[0].name;
    highestScore = players[0].score;
    winners.push(winner);
    for (var i = 1; i < players.length; i++) {
        if (highestScore == players[i].score) {
            winners.push(players[i].name);
        }
    }

    if (winners.length > 1) {
        document.getElementById("winnersPl").innerHTML = "The winners are " + winners.join(", ");
    }
    else {
        document.getElementById("winnersPl").innerHTML = "The winner is " + winners;
    }
}

function reloadPage() {
    location.reload();
}
