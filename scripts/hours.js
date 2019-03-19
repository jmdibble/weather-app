// This files deals with writing out the correct hours of the day
// for the next 24hr

var date = new Date();
var current_hour = date.getHours();

plus0.innerHTML = "Now"

if ((current_hour + 6) > 24) {
    plus6.innerHTML = `${(current_hour + 6) - 24}:00`
} else {
    plus6.innerHTML = (current_hour + 6)
}

if ((current_hour + 12) > 24) {
    plus12.innerHTML = `${(current_hour + 12) - 24}:00`
} else {
    plus12.innerHTML = (current_hour + 12)
}

if ((current_hour + 18) > 24) {
    plus18.innerHTML = `${(current_hour + 18) - 24}:00`
} else {
    plus18.innerHTML = (current_hour + 18)
}

if ((current_hour + 24) > 24) {
    plus24.innerHTML = `${(current_hour + 24) - 24}:00`
} else {
    plus24.innerHTML = (current_hour + 24)
}
