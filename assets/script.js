var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var containerEl = document.querySelector("#container");
var searchCity = document.querySelector("#search-city");
var APIkey = "57b955f106e5397ac471f500b09676b2";
var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=57b955f106e5397ac471f500b09676b2";
const citySearch = document.querySelector("#city-search");

var formSearchHandler = function(event) {
    //prevent page from refreshing
    event.preventDefault();

    var username = nameInputEl.value.trim();
    if (username) {
        getCityInfo(username);

        containerEl.textContent = "";
        nameInputEl.value = "";
    } else {

    }
};

    fetch(requestURL)
        .then(response => response.json())
        .then(result => {
            console.log(result);
           // if (response.ok) {

           // }
            return result.citySearch
        });

// add event listeners to form and button container
userFormEl.addEventListener("submit", formSearchHandler);

        