const apiKey = "374a863d989a04b5c7fd02b23aee1903"
document.getElementById("search-button").addEventListener("click", latLong)


function latLong() {
    let cityName = document.getElementById("search-bar").value
    let latUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey
    fetch(latUrl)
        .then(function (data) {
            return data.json()
        })
        .then(function (results) {
            console.log(results)
            const latResults = results[0].lat
            const longResults = results[0].lon
            weather(latResults, longResults)
        })
}

function weather(lat, long) {
    const results = "lon=" + long + "&lat=" + lat
    const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?" + results + "&units=imperial&appid=" + apiKey
    fetch(weatherUrl)
        .then(function (data) {
            return data.json()
        })
        .then(function (results) {
            console.log(results)
            const dayResults = results[0]
            console.log(dayResults)
        }
        )
}

// function dayFive(dayResults) {
//      
// }