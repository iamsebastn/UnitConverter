const conversions = {
    meter: 3.281,
    liter: 0.264,
    kilo: 2.204
}

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthTxt = document.getElementById("length-txt")
const volumeTxt = document.getElementById("volume-txt")
const massTxt = document.getElementById("mass-txt")

convertBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        convertLength(inputEl.value)
        convertVolume(inputEl.value)
        convertMass(inputEl.value)
    } else {
        return alert("Please input a value")
    }
})


function convertLength(value) {
    let outputFeet = (value) * conversions.meter
    let outputMeter = (value) / conversions.meter

    lengthTxt.textContent = `
        ${value} meters = ${outputFeet.toFixed(3)} feet | 
        ${value} feet = ${outputMeter.toFixed(3)} meters
        ` 
}

function convertVolume(value) {
    let outputGallons = (value) * conversions.liter
    let outputLiter = (value) / conversions.liter

    volumeTxt.textContent = `
        ${value} liters = ${outputGallons.toFixed(3)} gallons | 
        ${value} gallons = ${outputLiter.toFixed(3)} liters
        ` 
}

function convertMass(value) {
    let outputPounds = (value) * 2.204
    let outputKilo = (value) * 2.204

    massTxt.textContent = `
        ${value} kilos = ${outputPounds.toFixed(3)} pounds | 
        ${value} pounds = ${outputKilo.toFixed(3)} kilos
        ` 
}