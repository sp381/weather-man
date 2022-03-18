var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#city-search");
var cardEl = document.querySelector("#cardEl");
var cityWeather = document.querySelector("#city-weather");
var APIkey = "57b955f106e5397ac471f500b09676b2";
var cityURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

//Gather the current date and time
const m = moment();
console.log(m.toString());

var today = new Date();
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
 document.getElementById("currentDate").value = date;
//End of Moment.js

var formSearchHandler = function(event) {
    //prevent page from refreshing
    event.preventDefault();

    var input = document.getElementById("city-search");
    var inputVal = "";
    if (input) {
        inputVal = input.value
    }
    console.log(input);
    console.log(inputVal);

    var getWeather = function(city) {
        fetch(cityURL + city + "&appid=" + APIkey +  '&units=imperial')
            .then(function(response) {
                return response.json();
            })    
            .then(function(data) {
                console.log(data);
            //var card = document.createElement('div')      
                cityWeather.innerHTML = ('<div class="card" style="width: 18rem;">' + 
               //' <img src="..." class="card-img-top" alt="...">' +
              '  <div class="card-body">' +
                '  <h5 class="card-title">' + data.name + '</h5>' +
                   '<p class="card-text">'+ 'Temp: ' + data.main.temp + ' F' + '</p>' +
                   '<p class="card-text">'+ 'Humidity: ' + data.main.humidity + '</p>' +
                   '<p class="card-text">'+ 'Wind: ' + data.wind.speed + ' MPH' + '</p>' +
                  //'<a href="#" class="btn btn-primary">Go somewhere</a>' +
               ' </div>' +
              '</div>')      
                //TODO save data that reps the city into local storage
            });
    };    
    getWeather(inputVal);

        //loop over city's
        for (var i = 0; i < localStorage.length; i++) {
         //format search name
            var city = localStorage.getItem(i);

        // create a span element to hold each city's name 
        var city = document.createElement("span");
        containerEl.classList = "flex-row align-center";

        }

};
// add event listeners to form and button container
userFormEl.addEventListener("submit", formSearchHandler)