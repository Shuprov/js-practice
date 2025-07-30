const myNumber = 82;
const friendsNumber = 42;
if (myNumber > 80) {
    if (friendsNumber > 80) {
        console.log("Let's go for a lunch");
    }
    else if (friendsNumber >= 60 && friendsNumber < 80) {
        console.log("good luck next time.")
    }
    else if (friendsNumber >= 40 && friendsNumber < 60) {
        console.log("I am keeping my friend's message unseen.");
    }
    else {
        console.log("I am blocking my friend");
    }
}
else if (myNumber < 80) {
    console.log("Going to home and sleep and act sad");
}