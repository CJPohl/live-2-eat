// Calculate BMI based on users input
export const calcBMI = (feet, inches, weight) => {
    const heightInch = (parseInt(feet) * 12) + parseInt(inches);
    return Math.floor(weight / (heightInch * heightInch) * 703);
}