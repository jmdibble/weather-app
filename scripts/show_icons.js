// show_icons is a bunch of rules which show icons for different weather types

function getIcon() {
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

module.exports.getIcon = getIcon;
export function getIcon();