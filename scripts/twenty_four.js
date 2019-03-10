// Declare call-back functions

const getFive = () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=a2cc8d63311e66372e46af585f47f5fb&q=${city.value},${country.value}&mode=json`
    console.log(url)
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            console.log(data.list[2].weather[0].description)
            weath6.innerHTML = (data.list[2].weather[0].description)
        })
}

// assign event listeners
btnFive.addEventListener('click', getFive)