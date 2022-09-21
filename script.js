console.log("hello")
// using Geocoding API to fetch coordinates of the city to store in local storage and use as a query paramater in fetching weather data
function fetchGEOCODE(requestURL) {
    // will change this var to take input value of form (using placeholder right now)
    var city = "London" 
    var requestURL = "http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=4ae33cda42e0e1eb25daadd0f0e7741c&q=" + city

    fetch(requestURL)
    .then(function (response){
        if (response.ok) {
            response.json().then(function(data){
            // console logging data to determine how data is categorised
            console.log(data);
            
            // first array object
            var longitude = data[0].lon
            var latitude = data[0].lat

            console.log(longitude)
            console.log(latitude)
            
            // setting value in local storage to be 
            localStorage.setItem("longitude",longitude)
            localStorage.setItem("latitude",latitude)

        });
    } else {
        console.log("error in fetch")
    }
})
}

// using weather API to fetch weather data based on coordinates fetched from local storage
function fetchWEATHER(requestURL) {
    var longitude = localStorage.getItem("longitude")
    var latitude = localStorage.getItem("latitude")
    var requestURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=4ae33cda42e0e1eb25daadd0f0e7741c"

    fetch(requestURL)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
            console.log(data);
            })
        }

    })
}


fetchGEOCODE()
fetchWEATHER()
