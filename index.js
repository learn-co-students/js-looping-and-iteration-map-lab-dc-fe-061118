// Code your solution in this file.

function lowerCaseDrivers(x) {
let smallCaseDrivers=x.map(lowerCaseDriver);
return smallCaseDrivers;
} 

function lowerCaseDriver (x) {
  return x.toLowerCase();
}


function nameToAttributes (x) {
  return x.map(separate);
}

function separate (x) {
  let fullName = x.split(' ');
  return {
    firstName: fullName[0],
    lastName: fullName[1]
  };
}

function attributesToPhrase (arr) {
  return arr.map(phrase);
}

function phrase (obj) {
  return obj.name + " is from " + obj.hometown;
}

