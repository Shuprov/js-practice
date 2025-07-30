// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;
var averageMark = (mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks) / 5;
var averageNumber = parseFloat(averageMark.toFixed(2)); //converting string to float number
console.log(averageNumber);
