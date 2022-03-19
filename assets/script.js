var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#city-search");
var cardEl = document.querySelector("#cardEl");
var cityWeather = document.querySelector("#city-weather");
var APIkey = "57b955f106e5397ac471f500b09676b2";
var cityURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?";

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
                console.log(data.main);
            var lat = data.coord.lat    
            var lon = data.coord.lon   
                cityWeather.innerHTML = ('<div class="card" style="width: 18rem;">' + 
               //' <img src="..." class="card-img-top" alt="...">' +
              '  <div class="card-body">' +
                '  <h5 class="city-name">' + data.name + '</h5>' +
                   '<p class="card-text">'+ 'Temp: ' + data.main.temp + ' F' + '</p>' +
                   '<p class="card-text">'+ 'Humidity: ' + data.main.humidity + '</p>' +
                   '<p class="card-text">'+ 'Wind: ' + data.wind.speed + ' MPH' + '</p>' +
               ' </div>' +
              '</div>')     
            fetch(forecastURL + "lat=" + lat + "&lon=" + lon + "&appid=" + APIkey + '&units=imperial') 
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    console.log(data.list);
                const fiveDay =document.getElementById("card-five") 
                 //   fiveDay.append(JSON.stringify(data.list[0]))
                 let dayNumber = 1; 
                 for(var i = 0; i < data.list.length; i++) {
                     console.log(i%3 === 0);
                    if (i%7 === 0) {
                        console.log(dayNumber);
                        console.log(i);
                    dayNumber = dayNumber + 1 
                     const oneDay = document.createElement("div")
                    oneDay.setAttribute("class", "col") 
                    oneDay.innerHTML = ('<div class="card" style="width: 18rem;">' + 
                    //' <img src="..." class="card-img-top" alt="...">' +
                   '  <div class="card-body">' +
                     '  <h5 class="card-time">' + data.list[i].dt_txt + '</h5>' +
                         '<p class="card-text">'+ 'Temp: ' + data.list[i].main.temp + ' F' + '</p>' +
                         '<p class="card-text">'+ 'Humidity: ' + data.list[i].main.humidity + '</p>' +
                         '<p class="card-text">'+ 'Wind: ' + data.list[i].wind.speed + ' MPH' + '</p>' +
                         '<p class="card-text">'+ 'Wind: ' + data.list[i].weather.icon + '</p>' +
                    ' </div>' +
                   '</div>') 
                   console.log(oneDay);
                   console.log("oneDay");
                   fiveDay.append(oneDay)
                 } else if (dayNumber === 6) {
                    break
                 }
                 }
                // // fiveDay.innerHTML = ('<div class="card" style="width: 18rem;">' + 
                //  //' <img src="..." class="card-img-top" alt="...">' +
                // '  <div class="card-body">' +
                //   '  <h5 class="card-title">' + data.list[0].dt_txt + '</h5>' +
                //       '<p class="card-text">'+ 'Temp: ' + data.list[0].main.temp + ' F' + '</p>' +
                //    //   '<p class="card-text">'+ 'Humidity: ' + data.main.humidity + '</p>' +
                //     //  '<p class="card-text">'+ 'Wind: ' + data.wind.speed + ' MPH' + '</p>' +
                //  ' </div>' +
                // '</div>')  
                })

                //TODO save data that reps the city into local storage
            });
    };    
    getWeather(inputVal);

        //loop over city's
        for (var i = 0; i < localStorage.length; i++) {
         //format search name
            var city = localStorage.getItem(i);

        // create a span element to hold each city's name 
        var city = document.getElementById("card");
        containerEl.classList = "flex-row align-center";

        }

};
// add event listeners to form and button container
userFormEl.addEventListener("submit", formSearchHandler)