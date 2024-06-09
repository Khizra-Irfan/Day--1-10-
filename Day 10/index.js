"use strict";
//Question 28:
let age = 35;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age < 4) {
    console.log("The person is a toddler");
}
else if (age < 13) {
    console.log("The person is a kid");
}
else if (age < 18) {
    console.log("The person is a teenager");
}
else if (age < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is an elder");
}
//Question 29:
let favorite_fruit = ['mango', 'strawberry', 'pomegranate', 'watermelon'];
if (favorite_fruit.includes("strawberry")) {
    console.log("You really like strawberries");
}
if (favorite_fruit.includes("mango")) {
    console.log("You really like mangoes");
}
if (favorite_fruit.includes("pomegranates")) {
    console.log("You really like pomegranates");
}
if (favorite_fruit.includes("watermelon")) {
    console.log("You really like watermelon");
}
//Question 30:
let usernames = ['admin', 'user1', 'user2', 'user3', 'user4'];
usernames.forEach(usernames => {
    if (usernames === "admin") {
        console.log("Hello admin, hope you are doing great");
    }
    else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
});
