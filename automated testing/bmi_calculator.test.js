const BMI = require('./bmi_calculator')

// assuming that the height would be stay as 1.50m and the weight would be a subject for change starting at 40kg

test('with the height at 1.50m and the weight of 40kg, the returned message would be ["You are Underweight"]', () => {
    expect(BMI.BMI_calculator(1.50,40)).toBe("You are Underweight")
})

test('with the height at 1.50m and the weight of 50kg, the returned message would be ["You have a normal weight"]', () => {
    expect(BMI.BMI_calculator(1.50,50)).toBe("You have a normal weight")
})

test('with the height at 1.50m and the weight of 60kg, the returned message would be ["You are overweight"]', () => {
    expect(BMI.BMI_calculator(1.50,60)).toBe("You are overweight")
})

test('with the height at 1.50m and the weight of 70kg, the returned message would be ["You have Obesity Class I"]', () => {
    expect(BMI.BMI_calculator(1.50,70)).toBe("You have Obesity Class I")
})

test('with the height at 1.50m and the weight of 80kg, the returned message would be ["You have Obesity Class II"]', () => {
    expect(BMI.BMI_calculator(1.50,80)).toBe("You have Obesity Class II")
})

test('with the height at 1.50m and the weight of 90kg, the returned message would be ["You have Obesity Class III"]', () => {
    expect(BMI.BMI_calculator(1.50,90)).toBe("You have Obesity Class III")
})
