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

/* Example given
let a = 2, 
    b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
    result += "less than 10"; 
} else {
    result += "greater than 10";
}
*/

let a = 4,
    b = 8;
let result = `${a} + ${b} is `;
result += a + b < 10 ? "less than 10" : "greater than 10";
// ^ "+=" adds the string onto the end of the result string, and assigns 'result' the new value of the two strings together.
console.log(result);

// === Question 5 === Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

/* Example Given
function getGreeting(name) {
    return "Hello " + name + "!";
}
*/

let getGreeting = function (name) {
    return "Hello " + name + "!";
};
let getGreeting2 = (name) => "Hello " + name + "!";

console.log(getGreeting("Bob"));
console.log(getGreeting2("Charlie"));

// === Question 6 === a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
    name: "Westley",
    numFingers: 5,
};
const rugen = {
    name: "Count Rugen",
    numFingers: 6,
};
const inigo = {
    firstName: "Inigo",
    lastName: "Montoya",
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => (person.numFingers > 5 ? "You killed my father. Prepare to die." : "Nice to meet you."),
};
inigo.greeting(westley);
inigo.greeting(rugen);

// === Question 7 === The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
    },
    basket() {
        this.score += 2;
    },
    threePointer() {
        this.score += 3;
    },
    halfTime() {
        console.log("Halftime score is " + this.score);
    },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
