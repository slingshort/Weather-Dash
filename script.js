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
    var requestURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=4ae33cda42e0e1eb25daadd0f0e7741c&units=metric"

    fetch(requestURL)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
            console.log(data);
            
            // creating var for current day data
            var tempMain = data.list[0].main.temp
            var windMain = data.list[0].wind.speed
            var humidityMain = data.list[0].main.humidity
            var iconMain = data.list[0].weather[0].icon


            console.log(tempMain)
            console.log(windMain)
            console.log(humidityMain)
        

            localStorage.setItem("tempMain",tempMain)
            localStorage.setItem("windMain",windMain)
            localStorage.setItem("humidityMain",humidityMain)
            localStorage.setItem("iconMain",iconMain)

            // Need to figure out the best way to loop through this function, take every 8 array values (3 hour increments so 8*3 means 24h)
            var temp1 = data.list[7].main.temp
            var wind1 = data.list[7].wind.speed
            var humidity1 = data.list[7].main.humidity
            var icon1 =data.list[7].weather[0].icon

            localStorage.setItem("temp1",temp1)
            localStorage.setItem("wind1",wind1)
            localStorage.setItem("humidity1",humidity1)
            localStorage.setItem("icon1",icon1)
            
            // card2
            var temp2 = data.list[15].main.temp
            var wind2 = data.list[15].wind.speed
            var humidity2 = data.list[15].main.humidity
            var icon2 =data.list[15].weather[0].icon

            localStorage.setItem("temp2",temp2)
            localStorage.setItem("wind2",wind2)
            localStorage.setItem("humidity2",humidity2)
            localStorage.setItem("icon2",icon2)

            // card3
            var temp3 = data.list[20].main.temp
            var wind3 = data.list[20].wind.speed
            var humidity3 = data.list[20].main.humidity
            var icon3 =data.list[20].weather[0].icon


            localStorage.setItem("temp3",temp3)
            localStorage.setItem("wind3",wind3)
            localStorage.setItem("humidity3",humidity3)
            localStorage.setItem("icon3",icon3)

            // card4
            var temp4 = data.list[31].main.temp
            var wind4 = data.list[31].wind.speed
            var humidity4 = data.list[31].main.humidity
            var icon4 =data.list[31].weather[0].icon


            localStorage.setItem("temp4",temp4)
            localStorage.setItem("wind4",wind4)
            localStorage.setItem("humidity4",humidity4)
            localStorage.setItem("icon4",icon4)


            // card5
            var temp5 = data.list[39].main.temp
            var wind5 = data.list[39].wind.speed
            var humidity5 = data.list[39].main.humidity
            var icon5 =data.list[39].weather[0].icon


            localStorage.setItem("temp5",temp5)
            localStorage.setItem("wind5",wind5)
            localStorage.setItem("humidity5",humidity5)
            localStorage.setItem("icon5",icon5)

            })
        }
    })
}


// var temp1area = document.getElementById("temp1area")
// var wind1area = document.getElementbyId("wind1area")
// var humidity1area = document.getElementById("humidity1area")
// var temp2area = document.getElementbyId("temp2area")
// var wind2area = document.getElementbyId("wind2area")
// var humidity2area = document.getElementById("humidity2area")
// var temp3area = document.getElementbyId("temp3area")
// var wind3area = document.getElementbyId("wind3area")
// var humidity3area = document.getElementById("humidity3area")
// var temp4area = document.getElementbyId("temp4area")
// var wind4area = document.getElementbyId("wind4area")
// var humidity4area = document.getElementById("humidity4area")
// var temp5area = document.getElementbyId("temp5area")
// var wind5area = document.getElementbyId("wind5area")
// var humidity5area = document.getElementById("humidity5area")

function renderCARDS() {
    
    // main section
    document.getElementById("tempMain").innerHTML = localStorage.getItem("tempMain")
    document.getElementById("windMain").innerHTML = localStorage.getItem("windMain")
    document.getElementById("humidityMain").innerHTML = localStorage.getItem("humidityMain")
    var iconMainID = localStorage.getItem("iconMain")
    document.getElementById("iconMainarea").setAttribute("src", "http://openweathermap.org/img/wn/" +iconMainID + "@2x.png")

    

    // card 1
    document.getElementById("temp1area").innerHTML = localStorage.getItem("temp1")
    document.getElementById("wind1area").innerHTML = localStorage.getItem("wind1")
    document.getElementById("humidity1area").innerHTML = localStorage.getItem("humidity1")
    var icon1ID = localStorage.getItem("icon1")
    document.getElementById("icon1area").setAttribute("src", "http://openweathermap.org/img/wn/" +icon1ID + "@2x.png")

    // card 2
    document.getElementById("temp2area").innerHTML = localStorage.getItem("temp2")
    document.getElementById("wind2area").innerHTML = localStorage.getItem("wind2")
    document.getElementById("humidity2area").innerHTML = localStorage.getItem("humidity2")
    var icon2ID = localStorage.getItem("icon2")
    document.getElementById("icon2area").setAttribute("src", "http://openweathermap.org/img/wn/" +icon2ID + "@2x.png")
    
    // card 3
    document.getElementById("temp3area").innerHTML = localStorage.getItem("temp3")
    document.getElementById("wind3area").innerHTML = localStorage.getItem("wind3")
    document.getElementById("humidity3area").innerHTML = localStorage.getItem("humidity3")
    var icon3ID = localStorage.getItem("icon3")
    document.getElementById("icon3area").setAttribute("src", "http://openweathermap.org/img/wn/" +icon3ID + "@2x.png")

    // card 4
    document.getElementById("temp4area").innerHTML = localStorage.getItem("temp4")
    document.getElementById("wind4area").innerHTML = localStorage.getItem("wind4")
    document.getElementById("humidity4area").innerHTML = localStorage.getItem("humidity4")
    var icon4ID = localStorage.getItem("icon4")
    document.getElementById("icon4area").setAttribute("src", "http://openweathermap.org/img/wn/" +icon4ID + "@2x.png")
    
    // card 5
    document.getElementById("temp5area").innerHTML = localStorage.getItem("temp5")
    document.getElementById("wind5area").innerHTML = localStorage.getItem("wind5")
    document.getElementById("humidity5area").innerHTML = localStorage.getItem("humidity5")
    var icon5ID = localStorage.getItem("icon5")
    document.getElementById("icon5area").setAttribute("src", "http://openweathermap.org/img/wn/" +icon5ID + "@2x.png")


    

}

// Need a function to run all functions on search button click
// function runAllFunctions () {

// document.getElementById("serachbtn").onclick = {
    fetchGEOCODE()
    fetchWEATHER()
    renderCARDS()
// }
// }