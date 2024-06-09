"use strict";
//Question 25:
//this will pass.
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//no output (fails)
alien_color = "red";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//Question 26:
//it runs the if block.
let alienColor = "yellow";
if (alienColor == "yellow") {
    console.log("You have won the game!");
}
else {
    console.log("You loss the game!");
}
//no output(fails)
alienColor = "green";
if (alienColor == "yellow") {
    console.log("You have won the game!");
}
else {
    console.log("You loss the game!");
}
//Question 27:
//Green alien version:
alien_color = "green";
if (alien_color == "green") {
    console.log("You have earned 50 points!");
}
else if (alien_color == "yellow") {
    console.log("You have earned 20 points");
}
else if (alien_color == "red") {
    console.log("You have earned 10 points!");
}
//Red alien version:
alien_color = "red";
if (alien_color == "green") {
    console.log("You have earned 50 points!");
}
else if (alien_color == "yellow") {
    console.log("You have earned 20 points");
}
else if (alien_color == "red") {
    console.log("You have earned 10 points!");
}
//Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You have earned 50 points!");
}
else if (alien_color == "yellow") {
    console.log("You have earned 20 points");
}
else if (alien_color == "red") {
    console.log("You have earned 10 points!");
}
