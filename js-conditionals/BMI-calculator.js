const weight = 45;
const height = 1.5748;
const BMI = weight / (height) ** 2;
if (BMI < 18.5) {
    console.log("you are underweight.");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are normal.");
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log("you are overweight.");
}
else {
    console.log("you are obese.");
}