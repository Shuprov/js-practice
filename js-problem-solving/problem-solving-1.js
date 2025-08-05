/** Problem -01 ( Divide the Asset ) */

var area = 2060;

//write your code here

var receivedArea = area / 2;

console.log(receivedArea);

/** Problem -02 ( Cycle or Laptop ) */

var money = 9999;

//write your code here

if (money >= 25000) {

    console.log("Laptop");

}

else if (money >= 10000) {

    console.log("Cycle");

}

else {

    console.log("Chocolate");

}

/** Problem -03 ( Medicine Planner ) */

var lastDay = 4;

//write your code here

for (var i = 1; i <= lastDay; i++) {

    if (i % 3 === 0) {

        console.log(i + " - medicine");

    }

    else {

        console.log(i + " - rest");

    }

}

/** Problem 04 - (Delete / Store) */

var fileName = "slipdf.txt";

//write your code here

if (fileName.slice(-4) === '.pdf' || fileName.slice(-5) === '.docx' || fileName.slice(0, 1) === '#') {

    console.log("Store");

}

else {

    console.log("Delete");

}

/** Problem 05 - ( PH Email Generator ) */

var student = { name: "mewo", roll: 96, department: "cse" };

//write your code here

var studentName = student.name;

var studentRoll = student.roll;

var studentDepartment = student.department;

console.log(studentName + studentRoll + '.' + studentDepartment + '@ph.ac.bd');

/** Problem 06 : (Current Salary ) */

var experience = 40;

var startingSalary = 30000;

//write your code here

var increasedSalary = startingSalary * 5 / 100;

var totalSalary = startingSalary + increasedSalary;

for (var i = 1; i < experience; i++) {

    increasedSalary = totalSalary * 5 / 100;

    totalSalary = totalSalary + increasedSalary;

}

var currentSalary = totalSalary.toFixed(2);

console.log(parseFloat(currentSalary));