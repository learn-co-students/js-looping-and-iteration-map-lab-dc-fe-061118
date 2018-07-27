// Code your solution in this file.
const drivers = [];


function lowerCaseNames(x) {
return x.toLowerCase();
}
function lowerCaseDrivers(anything){
  return anything.map(lowerCaseNames);
}



function nameSplitter(name){
  firstName = name.split(" ")[0];
  lastName = name.split(" ")[1];
  return {firstName:firstName, lastName:lastName};
}
function nameToAttributes(parameter){
  return parameter.map(nameSplitter);
}

function nameIsFromHometown(driver){
  console.log(driver.name +' is from '+ driver.hometown);
  return driver.name +' is from '+ driver.hometown;
}

function attributesToPhrase(parameter){
  return parameter.map(nameIsFromHometown);
}
