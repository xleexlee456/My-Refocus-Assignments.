//The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.


const BMI_formula= {
BMI_calculator: function(height,weight){
    // assuming that weight is measured in kg and height is to meters.
    let formula = weight/(height*height)
    if(formula <= 18.5){
        return "You are Underweight";
    } else if (formula >= 18.5 && formula <= 24.9){
        return "You have a normal weight"
    } else if (formula >= 25 && formula <= 29.9){
        return "You are overweight"
    } else if (formula >= 30 && formula <= 34.9){
        return "You have Obesity Class I"
    } else if (formula >= 35 && formula <= 39.9){
        return "You have Obesity Class II"
    } else if (formula >= 40){
        return "You have Obesity Class III"
    }
}
}

module.exports = BMI_formula