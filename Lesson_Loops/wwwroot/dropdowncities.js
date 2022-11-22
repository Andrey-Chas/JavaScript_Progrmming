let cities = [];

function addNewCity() {
    let newCity = document.getElementById("newCity").value;

    cities.push(newCity);

    reloadCities();
}

function reloadCities() {
    let citiesSelect = document.getElementById("citiesSelect");

    citiesSelect.innerHTML = "";

    for (var i = 0; i < cities.length; i++) {
        var option = document.createElement("option");

        option.value = cities[i];
        option.text = cities[i];

        citiesSelect.appendChild(option);
    }
}
