function numberOfOccurences() {
    var userIn = prompt("Enter some text", "");
    var dictionary = {};
    var arr = [];

    for (var index in userIn) {
        arr.push(userIn[index]);
    }

    for (var i = 0; i < arr.length; i++) {
        if (isNaN(dictionary[arr[i]])) {
            dictionary[arr[i]] = 1;
        }
        else {
            dictionary[arr[i]] = dictionary[arr[i]] + 1;
        }
    }

    var text = JSON.stringify(dictionary);
    document.getElementById("result").innerHTML = text;
}