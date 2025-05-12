// === Question 1 === Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

function ucFirstLetters(strng) {
    const cap1 = strng.split(" ");
    const cap2 = cap1.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return cap2.join(" ");
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("apple pie is good"));

// === Question 2 === Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

function truncate(strng, max) {
    if (strng.length > max) {
        const trnc1 = strng.slice(0, max);
        return trnc1 + "...";
    } else {
        return strng;
    }
}

console.log(truncate("This text will be truncated if it is too long", 25));
console.log(truncate("This text is fine", 25));

// === Question 3 === Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

// Original
const animals = ["Tiger", "Giraffe"];
console.log(animals);

// a)
animals.push("Monkey", "Lion");
console.log(animals);

// b)
animals.unshift("Penguin", "Hippo");
console.log(animals);

// c)
animals.sort();
console.log(animals);

// d)
function replaceMiddleAnimal(newValue) {
    const midInd = Math.floor(animals.length / 2);
    animals[midInd] = newValue;
}
replaceMiddleAnimal("Panda");
console.log(animals);

// e)
function findMatchingAnimals(beginsWith) {
    const lwrBgns = beginsWith.toLowerCase();
    return animals.filter((animal) => animal.toLowerCase().startsWith(lwrBgns));
}
console.log(findMatchingAnimals("p"));
console.log(findMatchingAnimals("l"));

// === Question 4 === Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// a) The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

// a)
function camelCase(cssProp) {
    const cap1 = cssProp.split("-");
    const cap2 = cap1.map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)));
    return cap2.join("");
}
console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

// b+c)
function camelCase2(cssProp) {
    const cap1 = cssProp.split("-");
    let result = cap1[0];

    for (let i = 1; i < cap1.length; i++) {
        const word = cap1[i];
        result += word.charAt(0).toUpperCase() + word.slice(1);
    }

    return result;
}
console.log(camelCase2("margin-left"));
console.log(camelCase2("background-image"));
console.log(camelCase2("display"));

function camelCase3(cssProp) {
    const cap1 = cssProp.split("-");
    let result = "";
    let index = 0;
    for (const word of cap1) {
        result += index === 0 ? word : word[0].toUpperCase() + word.slice(1);
        index++;
    }

    return result;
}

console.log(camelCase3("margin-left"));
console.log(camelCase3("background-image"));
console.log(camelCase3("display"));

function camelCase4(cssProp) {
    const cap1 = cssProp.split("-");
    let result = cap1[0];
    let i = 1;

    while (i < cap1.length) {
        const word = cap1[i];
        result += word[0].toUpperCase() + word.slice(1);
        i++;
    }

    return result;
}

console.log(camelCase4("margin-left"));
console.log(camelCase4("background-image"));
console.log(camelCase4("display"));

// === QUestion 5 === Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?
// a) Explain why the above code returns the wrong answer
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/en-/US/docs/Web/JavaScript/Reference/Statements/switch
// may be useful.
// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.

let twentyCents = 0.2;
let tenCents = 0.1;
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
// a) The above is not working because toFixed returns a string, and the + is concatenating the two strings
// rather than adding the numbers as desired.

// b)
function currencyAddition(float1, float2) {
    const cents = 100;
    return (Math.round(float1 * cents) + Math.round(float2 * cents)) / 100;
}

console.log(currencyAddition(twentyCents, tenCents));

// c + d)
function currencyOperation(float1, float2, operation, numDecimals) {
    if (numDecimals < 1 || numDecimals > 10) {
        throw new Error("numDecimals must be between 1 and 10");
    }

    const scale = Math.pow(10, numDecimals);
    const int1 = Math.round(float1 * scale);
    const int2 = Math.round(float2 * scale);

    let result;

    switch (operation) {
        case "+":
            result = (int1 + int2) / scale;
            break;
        case "-":
            result = (int1 - int2) / scale;
            break;
        case "*":
            result = parseFloat((float1 * float2).toFixed(numDecimals));
            break;
        case "/":
            if (float2 === 0) {
                throw new Error("Division by zero");
            }
            result = parseFloat((float1 / float2).toFixed(numDecimals));
            break;
        default:
            throw new Error("Invalid Operator");
    }

    return result;
}
console.log(0.3 == currencyAddition(0.1, 0.2));
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 2));
console.log(currencyOperation(0.1, 0.2, "+", 2));
console.log(currencyOperation(0.3, 0.1, "-", 3));
console.log(currencyOperation(0.2, 0.1, "*", 4));
console.log(currencyOperation(0.3, 0.1, "/", 5));

// === Question 6 === Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values from duplicatesArray.
// Test with the following arrays and create another one of your own.

const colours = ["red", "green", "blue", "yellow", "orange", "red", "blue", "yellow"];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const numbers = [1, 2, 3, 4, 2, 5, 3, 6, 4];

function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(numbers));

// === Question 7 === Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.
// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.
// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.
// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.
// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

// a)
function getBookTitle(bookID) {
    const book1 = books.find((book) => book.id === bookID);
    return book1 ? book1.title : "book not found";
}
console.log(getBookTitle(3));

// b)
function getOldBooks() {
    return books.filter((book) => book.year < 1950);
}
console.log(getOldBooks());

// c)
function addGenre() {
    return books.map((book) => ({
        ...book,
        genre: "classic",
    }));
}
console.log(addGenre());

// d)
function getTitles(authorInitial) {
    const book1 = books.filter((book) => book.author[0].toUpperCase() === authorInitial.toUpperCase());
    return book1.map((book) => book.title);
}
console.log(getTitles("h"));

// e)
function latestBook() {
    let latestYear = books[0].year;
    books.forEach((book) => {
        if (book.year > latestYear) {
            latestYear = book.year;
        }
    });

    return books.find((book) => book.year === latestYear);
}
console.log(latestBook());

// === Question 8 === The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
// Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// c) Update the phone number for Caroline
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a + b)
const phoneBookDEF = new Map([
    ["David", "0421122334"],
    ["Elena", "0455667788"],
    ["Fred", "0466778899"],
]);

console.log(phoneBookDEF);

// c)
phoneBookABC.set("Caroline", "1234567890");
console.log(phoneBookABC);

// d)
function printPhoneBook(contacts) {
    for (const [name, number] of contacts) {
        console.log(name + ": " + number);
    }
}
printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

// e)
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);

// f)
for (const name of phoneBook.keys()) {
    console.log(name);
}

// === Question 9 === Given the below salaries object, perform the following tasks.
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary

let salaries = {
    Timothy: 35000,
    David: 25000,
    Mary: 55000,
    Christina: 75000,
    James: 43000,
};

// a)
function sumSalaries(salaries) {
    const numSal = Object.values(salaries);
    return numSal.reduce((total, salary) => total + salary, 0);
}
console.log(sumSalaries(salaries));

// b)
function topEarner(salaries) {
    let topEarn = 0;
    let topPerson = "";
    for (let person in salaries) {
        if (salaries[person] > topEarn) {
            topEarn = salaries[person];
            topPerson = person;
        }
    }
    return topPerson;
}
console.log(topEarner(salaries));

// === Question 9 === 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a)
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + " minutes have passed so far today");

// b)
const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + " seconds have passed so far today");

// c)
function calculateAge(birthDate) {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    console.log(`I am ${years} years, ${months} months and ${days} days old`);
}

calculateAge(new Date("1999-03-31"));

// d)
function daysInBetween(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
    const diffTime = Math.abs(date2 - date1);
    return Math.floor(diffTime / oneDay);
}

const date1 = new Date("2024-05-01");
const date2 = new Date("2025-05-01");
console.log(`Days between: ${daysInBetween(date1, date2)} days`);
