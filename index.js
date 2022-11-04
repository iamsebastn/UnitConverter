/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const conversions = {
    meter: 3.281,
    liter: 0.264,
    kilo: 2.204
}

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function() {
    convertLength()
    convertVolume()
    convertMass()

    console.log(inputEl.value + " times Hello")
})


function convertLength() {
    let output = (inputEl.value) * 3.281
    console.log("Your unit is around " + output + " feet")
}

function convertVolume() {
    let output = (inputEl.value) * 0.264
    console.log("Your unit is around " + output + " gallons")
}

function convertMass() {
    let output = (inputEl.value) * 2.204
    console.log("Your unit is around " + output + " pounds")
}