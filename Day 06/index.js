"use strict";
//Question 16:
let guest_list = ['hania', 'hadia', 'hiba'];
console.log("Good news! We have found a bigger dinner table.");
//Adding more guests:
guest_list.unshift('maria');
guest_list.splice(2, 0, 'safa');
guest_list.push('sara');
guest_list.forEach(guests => {
    console.log(`Dear ${guests} you are invited at the dinner.`);
});
//Question 17:
console.log("Unfortunately, I can only invite two people for dinner.");
while (guest_list.length > 2) {
    let removedGuest = guest_list.pop();
    console.log(`Sorry ${removedGuest}, We can't invite you to the dinner.`);
}
guest_list.forEach(guests => {
    console.log(`Dear ${guests}, you're still invited at the dinner.`);
});
//shows empty list
guest_list.splice(0, guest_list.length);
console.log(guest_list);
//Question 18:
const places = ['Malaysia', 'Indonesia', 'Thailand', 'New Zealand'];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reversed alphabetical order:", places);
