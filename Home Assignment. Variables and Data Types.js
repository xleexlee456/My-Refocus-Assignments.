// TASK 1 - Calorie Tracking app
// Sam is cycling 30 mins everyday for 15 days
let numTimesSamRuns = 15;
let hoursOfCyclingPerDay = 0.5;
// Cycling for 30 mins burn 225 calories
let caloriesBurned = 225;
// compute and print message
console.log(`Great work, Sam!After ${hoursOfCyclingPerDay} hours of cycling every day for a ${numTimesSamRuns} days,you may lose a total of ${numTimesSamRuns*caloriesBurned} calories.`)


// TASK 2 - route 1 -Saving App
// Sam wants to save P10,000
let savingGoal = 10000;
// Sam has already saved P7,500.
let savings = 7500;
// compute for percentage and print message
function message() {
    let x = savings/savingGoal;
    let y = 100-(x*100); // to compute for percentage is to divide 7500/10000 then multiply by 100; after getting the percentage, we subtract if from 100% to know waht percentage is left to achieve the goal
    console.log(`Thank you for your discipline and hard work, Sam! You are now ${y}% from your goal savings of P${savingGoal}.`);
} 
message()

// TASK 2 - route 2-Saving App
// Sam wants to save P10,000
let goalSaving = 10000;
// Sam has already saved P7,500.
let balanceSavings = 7500;
// compute for percentage; to compute for percentage is to divide 7500/10000 then multiply by 100; after getting the percentage, we subtract if from 100% to know waht percentage is left to achieve the goal
let percentage = 100-((balanceSavings/goalSaving)*100) 
// Print message
console.log(`Thank you for your discipline and hard work, Sam! You are now ${percentage}% from your goal savings of P${goalSaving}.`)