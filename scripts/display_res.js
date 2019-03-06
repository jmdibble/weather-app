// Declare call-back functions

const handleClick = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
    console.log(url)
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            console.log(data.weather[0].description)
            let desc11 = (data.weather[0].description)
            let desc22 = Math.floor(data.main.temp - 273)
            desc1.innerHTML = desc11
            desc2.innerHTML = `${desc22}&deg;C`
        })
}

// assign event listeners
btnGo.addEventListener('click', handleClick)
