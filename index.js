// Write your solution here!
const  drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name){
  drivers.push(name)
}

function destructivelyPrependDriver (name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver (name){
  drivers.pop()
}

function destructivelyRemoveFirstDriver (){
  drivers.shift()
}

function appendDriver (name){
  const  newDrivers = drivers.slice();
  newDrivers.push(name)
  return newDrivers
}

function prependDriver (name){
  const  newDrivers = drivers.slice();
  newDrivers.unshift(name)
  return newDrivers
}

function removeLastDriver() {
  return drivers.slice(0,2);
}

function firstLastDriver() {
  return drivers.slice(0,2);
}

