// This file gets the location of the user and fills this into the input fields

var x = document.getElementById("btnLocation");

function getIP() {
    let url = `https://ipapi.co/json/ `
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            let city1 = (data.city)
            let country1 = (data.country_name)
            city.value = city1
            country.value = country1
        })
}

btnLocation.addEventListener('click', getIP)



