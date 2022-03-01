// Function to calculate max calories for either gain or loss
export const calcMax = (profile, feet, inches, weight) => {

    // Calculate BMI depending on 'gender'
    const calcBMR = (profile, feet, inches, weight) => {
        const heightInch = (parseInt(feet) * 12) + parseInt(inches);
        if (profile.gender==='male') {
            return Math.floor(66 + (6.23 * weight) + (12.7 * heightInch) - (6.8 * profile.age));
        }
        else if (profile.gender==='female') {
            return Math.floor(665 + (4.35 * weight) + (4.7 * heightInch) - (4.7 * profile.age));
        }
        else {
            return Math.floor(365 + (5 * weight) + (8 * heightInch) - (5 * profile.age));
        }
    }

    const bmr = calcBMR(profile, feet, inches, weight);

    if (profile.weight_goal_type==='gain') {
        return bmr + 500;
    } else {
        return bmr - 500;
    }
}