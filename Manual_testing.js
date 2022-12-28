function BMI(height,weight){
    // assuming that weight is measured in kg and height is to meters.
    let formula = weight/(height*height)
    if(formula <= 18.5){
        return console.log("You are Underweight")
    } else if (formula >= 18.5 && formula <= 24.9){
        return console.log("You have a normal weight")
    } else if (formula >= 25 && formula <= 29.9){
        return console.log("You are overweight")
    } else if (formula >= 30 && formula <= 34.9){
        return console.log("You have Obesity Class I")
    } else if (formula >= 35 && formula <= 39.9){
        return console.log("You have Obesity Class II")
    } else if (formula >= 40){
        return console.log("You have Obesity Class III")
    }
}
BMI()

// MANUAL TESTING
// test if the height is 1.50 and weight is 40, it should return as "You are underweight"
BMI(1.50,40) // CORRECT
// test if the height is 1.50 and weight is 50, it should return as "You have a normal weight"
BMI(1.50,50) // CORRECT
// test if the height is 1.50 and weight is 60, it should return as "You are overweight"
BMI(1.50,60) // CORRECT
// test if the height is 1.50 and weight is 70, it should return as "You have Obesity Class I"
BMI(1.50,70) // CORRECT
// test if the height is 1.50 and weight is 80, it should return as "You have Obesity Class II"
BMI(1.50,80) // CORRECT
// test if the height is 1.50 and weight is 90, it should return as "You have Obesity Class III"
BMI(1.50,90) // CORRECT