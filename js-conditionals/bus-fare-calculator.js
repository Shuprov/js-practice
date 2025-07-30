/***
Ticket fare Calculator  
*/

const age = 30;
const ticketPrice = 800; //Regular ticket price 800 taka
const isStudent = false;
if (age < 10) {
    //ticket free for children
    console.log("Your ticket is free!!!");
}
else if (isStudent) {
    //Students get a 50% discount
    const discount = ticketPrice * 50 / 100;
    const payAmount = ticketPrice - discount;
    console.log("You have to pay: " + payAmount + " taka");
}
else if (age >= 60) {
    //Senior citizens (age >= 60) gets a 15% Discount
    const discount = ticketPrice * 15 / 100;
    const payAmount = ticketPrice - discount;
    console.log("You have to pay: " + payAmount + " taka");
}
else {
    //Otherwise Regular ticket fare 800 tk
    console.log("You have to pay: " + ticketPrice + " taka");
}