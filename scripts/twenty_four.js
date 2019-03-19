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

btnFive.addEventListener('click', getRest)



