let cat = { breed: "munchkin" }
let myCat = { name: "fluffykins" }
Object.setPrototypeOf(myCat, cat)
myCat.tailLength = 15;
console.log(myCat.name, myCat.breed, myCat.tailLength)

/*
// __proto__ is the property that reference the instance of the prototype
// of model that has been set for that object.

// prototype it only exists on functions and is automatically created by JS
// for all functions it is a default function that exposes the ability to use
// the keyword "new" (or new function)

// object.__proto__ === Object.prototype
*/

function Dog(){}
Dog.prototype.breed = "Bulldog"

let myDoggie = new Dog()
myDoggie.name = "Brian"
console.log("myDoggie object:",myDoggie,"myDoggie.breed =", myDoggie.breed)
console.log("myDoggie.__proto__",myDoggie.__proto__)
