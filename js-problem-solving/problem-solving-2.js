function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    const totalFine = fare + fare * (20 / 100) + 30;
    return totalFine;
}


function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    let newString = "";
    for (const st of str) {
        if (st !== " ") {
            newString = newString + st;
        }
    }
    return newString.toUpperCase();
}


function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object' || Array.isArray(player1) === true || Array.isArray(player2) === true) {
        return "Invalid";
    }
    const player1TotalFoul = player1.foul + player1.cardY + player1.cardR;
    const player2TotalFoul = player2.foul + player2.cardY + player2.cardR;
    if (player1TotalFoul < player2TotalFoul) {
        return player1.name;
    }
    else if (player2TotalFoul < player1TotalFoul) {
        return player2.name;
    }
    else if (player1TotalFoul === player2TotalFoul) {
        return "Tie";
    }
}



function isSame(arr1, arr2) {
    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
        return "Invalid";
    }
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;

    if (arr1Length !== arr2Length) {
        return false;
    }
    for (let i = 0; i < arr1Length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;

}


function resultReport(marks) {
    if (Array.isArray(marks) === false) {
        return "Invalid";
    }
    const totalSubjects = marks.length;
    let sum = 0;
    let passedSubjectCount = 0;
    for (const mark of marks) {
        sum = sum + mark;
        if (mark >= 40) {
            passedSubjectCount++;
        }
    }
    const failedSubjectCount = totalSubjects - passedSubjectCount;
    const average = sum / totalSubjects;

    return {
        finalScore: Number.isNaN(Math.round(average)) ? 0 : Math.round(average),
        pass: passedSubjectCount,
        fail: failedSubjectCount
    };

}