// === Question 1 ===

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

// === Question 2 ===
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;
