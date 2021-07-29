document.body.style.backgroundColor = "white"
class weatherComponent {
    constructor(day, temperature, condition, pollenCount) {
        this.day = day;
        this.temperature = temperature;
        this.condition = condition;
        this.pollenCount = pollenCount;
    }
}
// Check whether the given temperature is a number or not
function validTemperature(temperature){
    if(typeof temperature != 'number') return "Error"
    return temperature
}
// Check whether a given day is valid or not
function validDay(day){
    if(day != "Monday" && day != "monday" && day != "Tuesday" 
        && day != "tuesday" && day != "wednesday" && day != "Wednesday"
        && day != "thursday" && day != "Thursday" && day != "friday" 
        && day != "Friday" && day != "saturday" && day != "Saturday"
        && day != "sunday" && day != "Sunday") return "Error"
    return day
}

// Check whether pollenCount is valid or not
function validPollenCount(pollenCount){
    if(pollenCount != "High" && pollenCount != "Moderate" 
        && pollenCount != "Low") return "Error"
    return pollenCount
}
// This function selects the right image to render based on the weather condition
function selectImageCondition(condition) {
    let image = ""
    if (condition === "sunny") image = "/Images/sunny.jpg"
    else if (condition === "rainy") image = "/Images/rainy.png"
    else if (condition === "cloudy") image = "/Images/cloudy.png"
    else if (condition === "sleety") image = "/Images/sleety.png"
    else if (condition === "thunderstormy") image = "/Images/thunderstormy.png"
    else if (condition === "snowy") image = "/Images/snowy.webp"
    else image = image
    return image
}
// This function adds a tag and its content to the DOM
function addTag(tag, content) {
    const newTag = document.createElement(tag);
    const bodyElem = document.querySelector("body");
    bodyElem.append(newTag);
    newTag.innerHTML = content;
}

// This function adds a weatherComponent obj to the DOM
function addDay(day, temperature, condition, pollenCount, tag){
    var divElm = document.createElement("div")
    divElm.classList.add("weather-component")
    const h2Elm1 = document.createElement("h2")
    h2Elm1.innerHTML = `${day}`
    h2Elm1.setAttribute("id", "day-title")
    const imgElm = document.createElement("img")
    imgElm.src = `${selectImageCondition(condition)}`
    const h2Elm2 = document.createElement("h4")
    h2Elm2.innerHTML = `Temperature: ${temperature}`
    h2Elm2.setAttribute("id", "temp-title")
    const pElm = document.createElement("p")
    pElm.innerHTML = `degrees farenheit`
    const h2Elm3 = document.createElement("h4")
    h2Elm3.setAttribute("id", "hum-title")
    h2Elm3.innerHTML = `Humidity: ${pollenCount}`
    divElm.append(h2Elm1)
    divElm.append(imgElm)
    divElm.append(h2Elm2)
    divElm.append(pElm)
    divElm.append(h2Elm3)

    const mainContener = document.querySelector(tag);
    mainContener.append(divElm);
}
// This function adds a weatherComponent obj to the DOM
function addDayP(day, temperature, condition, pollenCount, tag, style_class){
    const divElm = document.createElement("div")
    divElm.classList.add("weather-component", style_class)
    const h2Elm1 = document.createElement("h2")
    h2Elm1.innerHTML = `${day}`
    h2Elm1.setAttribute("id", "day-title")
    const imgElm = document.createElement("img")
    imgElm.src = `${selectImageCondition(condition)}`
    const h2Elm2 = document.createElement("h4")
    h2Elm2.innerHTML = `Temperature: ${temperature}`
    h2Elm2.setAttribute("id", "temp-title")
    const pElm = document.createElement("p")
    pElm.innerHTML = `degrees farenheit`
    const h2Elm3 = document.createElement("h4")
    h2Elm3.setAttribute("id", "hum-title")
    h2Elm3.innerHTML = `Humidity: ${pollenCount}`
    divElm.append(h2Elm1)
    divElm.append(imgElm)
    divElm.append(h2Elm2)
    divElm.append(pElm)
    divElm.append(h2Elm3)

    const mainContener = document.querySelector(tag);
    mainContener.append(divElm);
}
addTag("div", ``)
// Create weatherComponent objects
const monday = new weatherComponent("Monday", 65, "thunderstormy", "Low");
const tuesday = new weatherComponent("Tuesday", 32, "rainy", "Moderate");
const wednesday = new weatherComponent("Wednesday", 60, "sunny", "High");
const thursday = new weatherComponent("Thursday", 0, "cloudy", "Moderate");
const friday = new weatherComponent("Friday", 70, "sleety", "High");
const saturday = new weatherComponent("Saturday", 30, "snowy", "High");
const sunday = new weatherComponent("Sunday", 80, "sunny", "Low");

// Put objects in a list
const daysOfWeek = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

// Iterate over the list of objects and add each obj to the DOM
for (let i = 0; i < daysOfWeek.length; i++) {
    addDay(validDay(daysOfWeek[i].day), validTemperature(daysOfWeek[i].temperature), 
    daysOfWeek[i].condition, validPollenCount(daysOfWeek[i].pollenCount), "div")
}
addTag("p", ``)
// Create control buttons and add them to the DOM
const divElm = document.createElement("div")
divElm.classList.add("button-list")
const h1Elm = document.createElement("h1")
h1Elm.innerText = "What is your favorite Temperature?"
const btnContainer = document.createElement("div")
btnContainer.classList.add("all-buttons")
const btn1 = document.createElement("button")
btn1.setAttribute("id","btn1-style")
btn1.innerHTML = "Cold"
const btn2 = document.createElement("button")
btn2.setAttribute("id","btn2-style")
btn2.innerHTML = "Warm"
const btn3 = document.createElement("button")
btn3.setAttribute("id","btn3-style")
btn3.innerText = "Hot"
divElm.append(h1Elm)
btnContainer.append(btn1)
btnContainer.append(btn2)
btnContainer.append(btn3)
divElm.append(btnContainer)
// Append to last div element
const mainContener = document.getElementsByTagName("p")[7]
mainContener.append(divElm);

addTag("section", ``)

/**Add days of the week to the DOM */
for (let i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].temperature <= 32){
        addDayP(validDay(daysOfWeek[i].day), validTemperature(daysOfWeek[i].temperature), 
        daysOfWeek[i].condition, validPollenCount(daysOfWeek[i].pollenCount), "section", "cold-style")
    } else if (daysOfWeek[i].temperature >= 33 && daysOfWeek[i].temperature <= 70) {
        addDayP(validDay(daysOfWeek[i].day), validTemperature(daysOfWeek[i].temperature), 
        daysOfWeek[i].condition, validPollenCount(daysOfWeek[i].pollenCount), "section", "warm-style")
    } else if (daysOfWeek[i].temperature > 70) {
        addDayP(validDay(daysOfWeek[i].day), validTemperature(daysOfWeek[i].temperature), 
        daysOfWeek[i].condition, validPollenCount(daysOfWeek[i].pollenCount), "section", "hot-style")
    } else{
        document.write("Sorry! Not a good time this week.")
    }
}

const cold = document.querySelector('#btn1-style')
const warm = document.querySelector('#btn2-style')
const hot = document.querySelector('#btn3-style')

var coldDays = document.querySelectorAll(".cold-style")
var warmDays = document.querySelectorAll(".warm-style")
var hotDays = document.querySelectorAll(".hot-style")

cold.addEventListener('click', () => {
    // Hide Warm and hot days before displaying cold days
    for(let i = 0; i < warmDays.length; i++) {
        warmDays[i].style.display = "none"
    }
    for(let i = 0; i < hotDays.length; i++) {
        hotDays[i].style.display = "none"
    }
   // Display cold Days
    for(let i = 0; i < coldDays.length; i++) {
        if (coldDays[i].style.display === "none"){
            coldDays[i].style.display = "inline-block"
        } else coldDays[i].style.display = "none"
    }
});


warm.addEventListener('click', () => {
    // Hide cold and hot days before displaying warm days
    for(let i = 0; i < coldDays.length; i++) {
        coldDays[i].style.display = "none"
    }
    for(let i = 0; i < hotDays.length; i++) {
        hotDays[i].style.display = "none"
    }
    // Display warm days
    for(let i = 0; i < warmDays.length; i++) {
        if (warmDays[i].style.display === "none"){
            warmDays[i].style.display = "inline-block"
        } else warmDays[i].style.display = "none"
    }
});

hot.addEventListener('click', () => {
    // Hide Warm and cold days before displaying hot days
    for(let i = 0; i < warmDays.length; i++) {
        warmDays[i].style.display = "none"
    }
    for(let i = 0; i < coldDays.length; i++) {
        coldDays[i].style.display = "none"
    }
    // Display hot days
    for(let i = 0; i < hotDays.length; i++) {
        if (hotDays[i].style.display === "none"){
            hotDays[i].style.display = "inline-block"
        } else hotDays[i].style.display = "none"
    }
});


