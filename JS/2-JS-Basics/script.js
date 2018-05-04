// Lecture: Variables

/*
var name = 'Joe';
console.log(name);

var lastName = 'Yourmom';
console.log(lastName);

var age = 29;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: Variables 2

// var name = 'Katya';
// var age = 30;
//
// console.log(name + age);
// console.log(age + age);
//
// var job, isMarried;
//
// console.log(job);
//
// job = 'yourmom';
// isMarried = false;
//
// console.log(name + ' is a ' + age + ' years old ' + job + ' . Is she married? ' + isMarried + '.');
//
// age = 'forty';
// job = 'Irish climber';
//
// console.log(name + ' is a ' + age + ' years old ' + job + ' . Is she married? ' + isMarried + '.');
//
// var lastName = prompt('What is her last name?');
// console.log(lastName);
//
// alert(name + ' is a ' + age + ' years old ' + job + ' . Is she married? ' + isMarried + '.');

//Lecture: Operators

// var now = 2018;
// var birthYear = now - 30;
//
// birthYear = now - 30 * 2;
//
// console.log(birthYear);
//
// var ageKatya = 30;
// var ageTrxie = 30;
//
// ageKatya = ageTrxie = (3 + 5) * 4 - 6;
// //ageKatya = ageTrxie = 26
// ageKatya++;
// ageTrxie *= 2;
// // it's like saying: ageTrxie = ageTrxie *2;
// console.log(ageKatya);
// console.log(ageTrxie);

//Lecture: Conditionals

// var name = 'Katya';
// var age = 26;
// var isMarried = 'no';
//
// if (isMarried === 'yes') {
//   console.log(name + ' is married!');
// } else {
//   console.log(name + ' isn\'t married, big deal!');
// }
//
// isMarried = false;
//
// if (isMarried) {
//   console.log('y');
// } else {
//   console.log('n');
// }
//

// Lecture: Boolean logic & Switch

// var age = 20;
//
// if (age < 20) {
//   console.log('under 20');
// } else if (age >= 20 && age < 30){
//   console.log('hmmm');
// } else {
//   console.log('over 20');
// }

// var job = 'yourmom';
//
// job = prompt('What does John do?');
//
// switch (job) {
//   case 'yourmom':
//     console.log('that\'s what he does');
//     break;
//   case 'your dad':
//     console.log('that\'s who he is');
//     break;
//   case 'pffff':
//     console.log('pfpfpfpf');
//     break;
//   default:
//     console.log('lazy af');
// }

// Coding challenge 1

// var ageKatya = 34;
// var ageTrixie = 34;
// var ageRene = 32;
//
// var heightKatya = 180;
// var heightTrixie = 180;
// var heightRene = 182;
//
// var scoreKatya = heightKatya + ageKatya * 5;
// console.log(scoreKatya);
// var scoreTrixie = heightTrixie + ageTrixie * 5;
// console.log(scoreTrixie);
// var scoreRene = heightRene + ageRene * 5;
// console.log(scoreRene);
//
// if (scoreKatya > scoreTrixie && scoreKatya > scoreRene) {
//   console.log('Katya wins!');
// } else if (scoreKatya === scoreTrixie || scoreKatya === scoreRene || scoreTrixie === scoreRene){
//   console.log('woot? :o');
// } else if (scoreRene > scoreKatya && scoreRene > scoreTrixie) {
//   console.log('Rene wins!');
// } else {
//   console.log('Trixie wins!');
// }

// Lecture: Functions

// function calculateAge(yearofBirth) {
//   var age = 2018 - yearofBirth;
//   return age;
// }
//
// var ageKatya = calculateAge(1990);
// var ageTrixie = calculateAge(1983);
// var ageRene = calculateAge(1981);
//
// function yearsUntilRetirement(name, year) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if (retirement >= 0) {
//     console.log(name + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(name + ' is already retired.');
//   }
//
// }
//
// yearsUntilRetirement('Katya', 1990);
// yearsUntilRetirement('Trixie', 1967);
// yearsUntilRetirement('Patsy', 1940);

//Lecture: Statements & Expressions
//
// function someFunc(par) {
//   //code
// } // <---- Statement; does not produce a var or value but performs an action
//
// var someFunc = function(par) {
//   //code
// } // <---- Expression; produces a value

// Lecture: Arrays

// var names = ['Oh', 'Long', 'Johnson'];
// var years = new Array(1981, 1988, 1945);
//
// console.log(names[0]);
// names[1] = 'Darlene';
// console.log(names);
//
// var katya = ['Katya', 'Zamo', 1980, 'legend', false];
//
// katya.push('black'); //adds an element at the end of the array
// katya.unshift('Comrade'); //adds an element at the start of the array
// katya.pop(); //removes the last element of an array
// katya.shift(); //removes the first element of an array
//
// console.log(katya);
//
// if (katya.indexOf('comediene') === -1) {
//   console.log('Katya is a legend');
// }


//Lecture: Objects

// var katya = {
//   name: 'Katya',
//   lastName: 'Zamo',
//   yearOfBirth: 1980,
//   job: 'legend',
//   isMarried: false
// };

// console.log(katya.lastName);
// console.log(katya['yearOfBirth']);
//
// var xyz = 'job';
// console.log(katya[xyz]);
//
// katya.lastName = 'Zamolodchikova';
// katya['job'] = 'life';

//Reading values out of an Object

// console.log(katya.lastName); // This returns the last names
// console.log(katya['job']); // Same happens when you pass the key
//
// var boo = 'job';  // We can do the same by storing the key to a variable
// console.log(katya[boo]);
//
// console.log(katya);
//
// var trixie = new Object();
// trixie.name = 'Trixie';
// trixie.lastName = 'Mattel';
// trixie['yearOfBirth'] = 1985;
// trixie['job'] = 'doll';
// trixie['isMarried'] = false;
//
// console.log(trixie);

//Lecture: Objects and Methods

var katya = {
  name: 'Katya',
  lastName: 'Zamo',
  yearOfBirth: 1980,
  job: 'legend',
  isMarried: false,
  family: ['mother', 'babushka', 'potatoes'],
  calculateAge: function(yearOfBirth) {   // function expression
    return 2018 - yearOfBirth;
  }
};

console.log(katya.calculateAge(1990));

var trixie = {
  name: 'Trixie',
  lastName: 'Mattel',
  yearOfBirth: 1985,
  job: 'henny',
  isMarried: false,
  family: ['mother', 'katya', 'gran'],
  calculateAge: function() {
    return 2018 - this.yearOfBirth; // this refers to the object it's contained in, e.g. trixie
  }
};

console.log(trixie.calculateAge());

// the .calculateAge or any .whatever  is called a method.

var age = trixie.calculateAge();
trixie.age = age;

console.log(trixie);
