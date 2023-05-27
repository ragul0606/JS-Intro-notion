// notion exercise

// values & variables

let country = "India";
let continent = "Asia";
let population = 140;
const language = "tamil";

// console.log(country);
// console.log(continent);
// console.log(population);

// data types

// const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof language);

// let, const & var

// language = "English";
// console.log(language);

// basic operators

// let halfOfPopulation = population / 2;
// console.log(halfOfPopulation);

// let increasedPopulation = population + 1;
// console.log(increasedPopulation);

// const finlandPopulation = 6;
// let answer1 = finlandPopulation > population;
// console.log(answer1);

// const averagePopulation = 33;
// let answer = averagePopulation > population;
// console.log(answer);

// let description =
//   country +
//   " is in " +
//   continent +
//   ", and it's " +
//   population +
//   " million speak " +
//   language;
// console.log(description);

// Coding Challenge #1

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let markWeight = 95;
// let markHeight = 1.88;
// let johnWeight = 85;
// let johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI.toFixed(1));
// console.log(johnBMI.toFixed(1));

// let markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// string & template literals

// console.log(
//   `Mark's BMI is ${markBMI.toFixed(2)} and John's BMI is ${johnBMI.toFixed(
//     2
//   )} and so it is ${markHigherBMI}`
// );

// if/else

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(`${country}'s population is below average`);
// }

// Coding Challenge #2

// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI.toFixed(1));
// console.log(johnBMI.toFixed(1));

// if (markBMI > johnBMI) {
//   console.log(
//     `Mark's BMI (${markBMI.toFixed(
//       2
//     )}) is higher than John's (${johnBMI.toFixed(2)})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${johnBMI.toFixed(2)})is higher than Marks's (${markBMI})! `
//   );
// }

// Type Conversion and Coercion

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality Operators: == vs. ===

// const numNeighbours = Number(
//   prompt(`'How many neighbours countries does your country have?'`)
// );
// if (numNeighbours === 1) {
//   console.log("Your country has Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("Your country has More than 1 border");
// } else {
//   console.log("Your country has No borders");
// }

// Logical Operators

// if (language === "english" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// Coding Challenge #3

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins.toFixed(0), scoreKoalas.toFixed(0));

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy !");
// } else {
//   console.log("No one wins the trophy");
// }

// switch statements

// let lang = prompt(`What is your mother tongue?`);
// switch (lang) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// The Conditional (Ternary) Operator

// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );

// Coding Challenge #4

// const bill = 430;

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// Functions

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and
// its capital city is ${capitalCity}`;
// }
// const descPortugal = describeCountry("Portugal", 10, "Lisbon");
// const descGermany = describeCountry("Germany", 83, "Berlin");
// const descFinland = describeCountry("Finland", 6, "Helsinki");
// console.log(descPortugal);
// console.log(descGermany);
// console.log(descFinland);

// Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const percentagePortugal1 = percentageOfWorld1(10);
// const percentageChina1 = percentageOfWorld1(1441);
// const percentageUSA1 = percentageOfWorld1(332);

// console.log(percentagePortugal1.toFixed(2));
// console.log(percentageChina1.toFixed(2));
// console.log(percentageUSA1.toFixed(2));

// Arrow Functions

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const percentagePortugal3 = percentageOfWorld3(10);
// const percentageChina3 = percentageOfWorld3(1441);
// const percentageUSA3 = percentageOfWorld3(332);

// console.log(percentagePortugal3.toFixed(2));
// console.log(percentageChina3.toFixed(2));
// console.log(percentageUSA3.toFixed(2));

// Functions Calling Other Functions

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million
// people, which is about ${percentage}% of the world.`;
//   console.log(description);
// };

// describePopulation("Portugal", 10);
// describePopulation("China", 1441);

// Coding Challenge #5

// const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
//   (scoreOne + scoreTwo + scoreThree) / 3;

// // let averageScoreOfDolphins = calcAverage(85, 54, 41);
// // let averageScoreOfKoalas = calcAverage(23, 43, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins are the winners`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas are the winners`);
//   } else {
//     console.log(`No team wins`);
//   }
// }

// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 43, 27));

// Introduction to Arrays

// const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// Basic Array Operations

// const neighbours = ["Norway", "Sweden", "Russia"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }
// neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
// console.log(neighbours);

// Coding Challenge #6

// const bill = 430;

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// implicit arrow function

// const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);

// const bill = [125, 555, 44];
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
// console.log(total);

// Introduction to Objects

// const myCountry = {
//   country: "Finland",
//   capital: "Helsinki",
//   language: "finnish",
//   population: 6,
//   neighbours: ["Norway", "Sweden", "Russia"],
// };

// DOT VS Bracket Notation

// console.log(
//   `${myCountry.country} has ${myCountry.population} million
// ${myCountry.language}-speaking people,
// ${myCountry.neighbours.length} neighbouring countries and
// a capital called ${myCountry.capital}.`
// );
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);

// Object Methods

// const myCountry = {
//   country: "Finland",
//   capital: "Helsinki",
//   language: "finnish",
//   population: 6,
//   neighbours: ["Norway", "Sweden", "Russia"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighboring countries and a capital called ${this.capital}.`
//     );
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     // Even simpler version (see why this works...)
//     // this.isIsland = !Boolean(this.neighbours.length);
//   },
// };
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// Coding Challenge #7

// const mark = {
//   fullName: "Mark Miller",
//   height: 1.69,
//   mass: 78,
//   calcBMI: function () {
//     const BMI = this.mass / (this.height * 2);
//     return BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   height: 1.95,
//   mass: 92,
//   calcBMI: function () {
//     const BMI = this.mass / (this.height * 2);
//     return BMI;
//   },
// };

// const markHigherBMI = mark.calcBMI() > john.calcBMI();

// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI (${mark.calcBMI().toFixed(2)}) is higher than John's (${john
//       .calcBMI()
//       .toFixed(2)})`
//   );
// } else {
//   console.log(
//     `John's BMI (${john.calcBMI().toFixed(2)}) is higher than Mark's (${mark
//       .calcBMI()
//       .toFixed(2)})`
//   );
// }

// Coding Challenge #8

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);

for (let billCount = 0; billCount < bill.length; billCount++) {
  const tip = calcTip(bill[billCount]);
  const total = bill[billCount] + tip;

  tips.push(tip);
  totals.push(total);
}

console.log(bill);
console.log(tips);
console.log(totals);
