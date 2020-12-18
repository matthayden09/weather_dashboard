// variables
var currentDay = moment().format('LL');
var apiKey = '85300d8f018e23e6238ae02a4301aa4d';


// display current date
$('#currentDay').text(currentDay)

// show current weather and five day forecast
$('#searchBtn').on('click', function (event) {
    
    event.preventDefault();
    
    // grab the text from the input box
    var searchCity = $('#searchCity').val();
    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=' + apiKey + '&units=imperial'
    
    
    // var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + '&appid=' + apiKey + '&units=imperial'


    // current weather ajax
    $.ajax({
        url: weatherURL,
        method: 'GET'
    }).then(function (weather) {
        console.log(weather)
        console.log(weather.coord.lat)
        // push data to HTML
        $('#city').text("City: " + weather.name)
        $('#temperature').text("Temperature: " + weather.main.temp)
        $('#humidity').text("Humidity: " + weather.main.humidity)
        $('#windSpeed').text("Wind Speed: " +
        weather.wind.speed)

        var uvURL = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + weather.coord.lat + '&lon=' + weather.coord.lon + '&appid=' + apiKey + '&units=imperial'
        
        // uv index ajax
        $.ajax({
            url: uvURL,
            method: 'GET'
        }).then(function (uvIndex) {
            console.log(uvIndex)
    
            $('#uvIndex').text("UV Index: " + uvIndex.value)
        });
    });


});




