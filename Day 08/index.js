"use strict";
//Question 22:
let languages1 = ['english', 'urdu', 'arabic', 'korean'];
//error bcs index 4 is not defined in an array.
console.log(languages1[4]);
//correcting the error:
languages1[3] = 'korean';
//Question 23:
let country = "Pakistan";
//Test 01:
console.log("Is country == 'Pakistan'? I predict True.");
console.log(country == 'Pakistan');
//Test 02:
console.log("Is country != 'Malaysia'? I predict True.");
console.log(country != 'Malaysia');
//Test 03:
console.log("Is country !== 'Singapore'? I predict True.");
console.log(country !== 'Singapore');
//Test 04:
console.log("Is country.Upper case == 'PAKISTAN'? I predict True.");
console.log(country.toUpperCase() == 'PAKISTAN');
//Test 05:
console.log("Is country === 'Pakistan'? I predict True.");
console.log(country === 'Pakistan');
//Test 06
console.log("Is country == 'PAKISTAN'? I predict False.");
console.log(country == 'PAKISTAN');
//Test 07
console.log("Is country === 'PAKISTAN'? I predict False.");
console.log(country === 'PAKISTAN');
//Test 08
console.log("Is country === 'Singapore'? I predict False.");
console.log(country === 'Singapore');
//Test 09
console.log("Is country != 'Pakistan'? I predict False.");
console.log(country != 'Pakistan');
//Test 10
console.log("Is country == 'New Zealand'? I predict False.");
console.log(country == 'New Zealand');
//Question 24:
console.log("test for equality and inequality with strings");
console.log("booklet" == "booklet"); //True
console.log("booklet" != "booklet"); //False
console.log("Testing with lower case");
console.log("Booklet".toLowerCase() == "booklet"); //True
console.log("BOOKLET".toLowerCase() != "booklet"); //False
console.log("Numerical Tests");
console.log(5 < 7); //True
console.log(10 > 15); //False
console.log("Tests using 'and' and 'or' operators");
console.log((4 < 6) && 10 > 9); //True
console.log((5 > 6) && 15 > 10); //False
console.log((4 < 6) || 10 > 9); //True
console.log((7 < 5) || 18 > 19); //False
console.log("Test whether an item is in a array");
let colors = ['blue', 'pink', 'purple'];
console.log("Is 'pink' in colors?");
console.log(colors.includes('pink')); //True
console.log("Is 'green' in colors?");
console.log(colors.includes('green')); //False
console.log("Test whether an item is not in a array");
console.log("Is 'yellow' not in colors?");
console.log(!colors.includes('yellow')); //True
console.log("Is 'blue' not in colors?");
console.log(!colors.includes('blue')); //False
