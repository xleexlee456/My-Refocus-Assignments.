// TASK 1- Celsius to Kelvin
// declare function
function convertToKelvin(tempCelsius) {
    let K = tempCelsius + 273.15; //formula is Kelvin= Celsius + 273.15
    return K;
}
console.log(convertToKelvin(10)) //10 C = 283.15 K

// Task 1- Fahrenheit to Kelvin
function fromFarenheitToKelvin(tempFarenheit) {
    let F = (tempFarenheit-32)*(5/9)+273.15 // formula for K = (F-32) * (5/9) + 273.15
    return F
}
console.log(fromFarenheitToKelvin(50)) // 60 F = 288.15 K


//TASK 2 - Tip Calculator
// declaration of function
function computeTip(totalBill) {
    tip = totalBill * 0.10 // the tip is 10% of a meal cost and the formula is total multiplied by 0.10 which is the same as 10%
    return tip
}
console.log(computeTip(5000)) // the 10% of P5000 meal cost is 500