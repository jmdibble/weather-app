// weatherNow gets the weather for right now

const weatherNow = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
    console.log(url)
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            let desc11 = (data.weather[0].description)
            let desc22 = Math.floor(data.main.temp - 273)
            desc1.innerHTML = (desc11)
            desc2.innerHTML = `${desc22}&deg;C`
            getIcon()
        })
}

// getRest gets the weather for the next 24hrs in 3 hour chunks

const getRest = () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=a2cc8d63311e66372e46af585f47f5fb&q=${city.value},${country.value}&mode=json`
    console.log(url)
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            weatherNow()
            console.log(data)
            weath6.innerHTML = (data.list[2].weather[0].description)
            weath12.innerHTML = (data.list[4].weather[0].description)
            weath18.innerHTML = (data.list[6].weather[0].description)
            weath24.innerHTML = (data.list[8].weather[0].description)
            temp6.innerHTML = Math.floor(data.list[2].main.temp - 273.15) + "&deg;C"
            temp12.innerHTML = Math.floor(data.list[4].main.temp - 273.15) + "&deg;C"
            temp18.innerHTML = Math.floor(data.list[6].main.temp - 273.15) + "&deg;C"
            temp24.innerHTML = Math.floor(data.list[8].main.temp - 273.15) + "&deg;C"
            getIcon()
        })
}

const getIcon = () => {
    let tags = [desc1, weath6, weath12, weath18, weath24]
    let icons = [0, 6, 12, 18, 24]
    for (i = 0; i < tags.length; i++) {
        if (tags[i].innerHTML == "thunderstorm with light rain" ||
            tags[i].innerHTML == "thunderstorm with rain" ||
            tags[i].innerHTML == "thunderstorm with heavy rain" ||
            tags[i].innerHTML == "light thunderstorm" ||
            tags[i].innerHTML == "thunderstorm" ||
            tags[i].innerHTML == "heavy thunderstorm" ||
            tags[i].innerHTML == "thunderstorm with light rain" ||
            tags[i].innerHTML == "ragged thunderstorm" ||
            tags[i].innerHTML == "thunderstorm with light drizzle" ||
            tags[i].innerHTML == "thunderstorm with drizzle" ||
            tags[i].innerHTML == "thunderstorm with heavy drizzle") {
            document.getElementById(`icon${icons[i]}`).className = "fas fa-bolt"
        } else if (
            tags[i].innerHTML == "moderate rain" ||
            tags[i].innerHTML == "heavy intensity rain" ||
            tags[i].innerHTML == "very heavy rain" ||
            tags[i].innerHTML == "extreme rain" ||
            tags[i].innerHTML == "freezing rain" ||
            tags[i].innerHTML == "shower rain" ||
            tags[i].innerHTML == "heavy intensity shower rain" ||
            tags[i].innerHTML == "ragged shower rain") {
            document.getElementById(`icon${icons[i]}`).className = "fas fa-cloud-showers-heavy"
        }
        else if (
            tags[i].innerHTML == "light rain" ||
            tags[i].innerHTML == "light intensity shower rain") {
            document.getElementById(`icon${icons[i]}`).className = "fas fa-cloud-rain"
        } else if (
            tags[i].innerHTML == "light snow" ||
            tags[i].innerHTML == "Snow" ||
            tags[i].innerHTML == "Heavy snow" ||
            tags[i].innerHTML == "Sleet" ||
            tags[i].innerHTML == "Light shower sleet" ||
            tags[i].innerHTML == "Shower sleet" ||
            tags[i].innerHTML == "Light rain and snow" ||
            tags[i].innerHTML == "Rain and snow" ||
            tags[i].innerHTML == "Light shower snow" ||
            tags[i].innerHTML == "Shower snow" ||
            tags[i].innerHTML == "Heavy shower snow") {
            document.getElementById(`icon${icons[i]}`).className = "fas fa-snowflake"
        } else if (
            tags[i].innerHTML == "clear sky") {
            document.getElementById(`icon${icons[i]}`).className = "fas fa-sun"
        } else if (
            tags[i].innerHTML == "few clouds: 11-25%" ||
            tags[i].innerHTML == "scattered clouds: 25-50%" ||
            tags[i].innerHTML == "broken clouds: 51-84%") {
            document.getElementById(`icon${icons[i]}`).className = "fas fa-cloud-sun"
        } else if (
            tags[i].innerHTML == "overcast clouds: 85-100%" ||
            tags[i].innerHTML == "mist" ||
            tags[i].innerHTML == "Smoke" ||
            tags[i].innerHTML == "Haze" ||
            tags[i].innerHTML == "fog" ||
            tags[i].innerHTML == "dust") {
            document.getElementById(`icon${icons[i]}`).className = "fas fa-cloud"
        } else {
            document.getElementById(`icon${icons[i]}`).className = "fas fa-cloud"
        }
    }
}


// assign event listeners
btnFive.addEventListener('click', getRest)

// Way to optimise 
// Use ID codes instead of names
// Separate out the icons function to a new file
