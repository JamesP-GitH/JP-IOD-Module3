// === Question 1 === What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
!true; // false
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // Not a number (NAN)
" -9 " + 5; // " -9 5"
" -9 " - 5; // -14
null + 1; // 1
undefined + 1; // Not a number (NAN)
undefined == null; // true
undefined === null; // false
" \t \n" - 2; // -2 (\t \n is essentially 0, notation for tab and newline, meaning "\t \n" is empty space)

console.log(" \t \n" - 2);

// === Question 2 === Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?

let three = "3"; // <- these are all strings
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; // "34" (concatinated strings)
let multiplication = three * four; // 12 (implicit converted to numbers by *)
let division = three / four; // 0.75 (implicit converted to numbers by /)
let subtraction = three - four; // -1 (implicit converted to numbers by -)
let lessThan1 = three < four; // true (implicit converted to numbers by <)
let lessThan2 = thirty < four; // false (implicit converted to numbers by <)

// === Question 3 === Which of the following console.log messages will print? Why?

if (0) console.log("#1 zero is true"); // Wont print, 0 == false
if ("0") console.log("#2 zero is true"); // Will print because non empty string is true
if (null) console.log("null is true"); // Wont print, null == false
if (-1) console.log("negative is true"); // Will print, all non zero numbers including negative are true
if (1) console.log("positive is true"); // Will print, all non zero numbers including positive are ture

// === Question 4 === Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// and b. What does the ‘+=’ do?
let a = 2,
    b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
    result += "less than 10";
} else {
    result += "greater than 10";
}
