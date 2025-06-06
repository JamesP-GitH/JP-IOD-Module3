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
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    },
    halfTime() {
        console.log("Halftime score is " + this.score + ", with " + this.fouls + " fouls");
        return this;
    },
    fullTime() {
        console.log("Final score is " + this.score + ", with " + this.fouls + " fouls");
    },
};
//modify each of the above object methods to enable function chaining as below:
//basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime(); // <- original
//basketballGame.basket().freeThrow().foul().threePointer().halfTime().basket().foul().fullTime(); // <- Test1
basketballGame.freeThrow().freeThrow().foul().foul().threePointer().halfTime().foul().foul().basket().fullTime(); // <- Test2

// === Question 8 === The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
    name: "Sydney",
    population: 5_121_000,
    state: "NSW",
    founded: "26 January 1788",
    timezone: "Australia/Sydney",
};

const melbourne = {
    name: "Melbourne",
    weather: "Wet",
    climate: "Cold",
    waterside: true,
    dogPopulation: 6000,
};

function location(city) {
    for (const key in city) {
        if (city.hasOwnProperty(key)) {
            console.log(`${key}: ${city[key]}`);
        }
    }
}
location(sydney);
location(melbourne);

// === Question 9 === Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// a)
let moreSports = teamSports;
moreSports.push("Soccer");
moreSports.unshift("Golf");
console.log(moreSports);
console.log(teamSports);

// b)
let dog2 = dog1;
dog2 = "Spot";
console.log(dog1);
console.log(dog2);

// c)
let cat2 = cat1;
cat2.name = "Felix";
console.log(cat1);
console.log(cat2);

// d)
// teamSports and cat1 change because arrays and objects point to a location in memory, even if reassigned, it points to the same location.
// dog1 did not change because it is a primitive value, in this case a string, which gets its own new location in memory when reassinged to dog2.
// Therefore when moreSports or cat2 is changed, it changes the original set of data because it is pointing to the same location in memory.

// === Question 10 === The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function () {
        return this.age >= 18;
    };
}

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 18;
    }
}

let person1 = new Person("John", 32);
let person2 = new Person("Amy", 9);
let person3 = new PersonClass("Frank", 8);
console.log(person1);
console.log(`Can ${person1.name} Drive?: ` + person1.canDrive());
console.log(person2);
console.log(`Can ${person2.name} Drive?: ` + person2.canDrive());
console.log(person3);
console.log(`Can ${person3.name} Drive?: ` + person3.canDrive());
