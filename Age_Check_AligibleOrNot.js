console.log('Welcome to my Movie Cinema');

var prompt = require('prompt-sync')();

// Convert age to number
const age = Number(prompt('Enter your Age: '));

if (age < 18) {
    console.log('20% Discount');
}
else if (age >= 18 && age < 65) {
    console.log('Your Ticket Is Normal Price. No Discount Available');
}
else {
    console.log('30% Discount Available');
}

console.log('Welcome to my Movie Cinema');
