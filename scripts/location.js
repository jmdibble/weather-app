// This file gets the location of the user and fills this into the input fields

var x = document.getElementById("btnLocation");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let x = position.coords.latitude;
    let y = position.coords.longitude;
    console.log(y, x)
    getCity(y, x);
}

function getCity(y, x) {
    let url = `https://api.postcodes.io/outcodes?lon=${y}&lat=${x}`
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            let city1 = (data.result[0].admin_district[0])
            let country1 = (data.result[0].country[0])
            city.value = city1
            country.value = country1
        })
}

btnLocation.addEventListener('click', showPosition)



