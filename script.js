    // variables
    var currentDay = moment().format('LL');
    // var searchBtn = $('#searchBtn');
    // var searchCity = $('#searchCity');
    var apiKey = '85300d8f018e23e6238ae02a4301aa4d';
    // var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=' + apiKey + '&units=imperial'
    
    // display current date
    $('#currentDay').text(currentDay)

    $('#searchBtn').on('click', function(event) {

        event.preventDefault();

        // grab the text from the input box
        var searchCity = $('#searchCity').val();
        
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=' + apiKey + '&units=imperial'
        
        $.ajax({
          url: queryURL,
          method: 'GET'
        }).then(function(weatherData){
          console.log(weatherData)
          // push data to HTML
          $('#city').text("City: " + weatherData.name)
          $('#temperature').text("Temperature: " + weatherData.main.temp)
          $('#humidity').text("Humidity: " + weatherData.main.humidity)
          $('#windSpeed').text("Wind Speed: " +
          weatherData.wind.speed)
        });

    });
        

      

    