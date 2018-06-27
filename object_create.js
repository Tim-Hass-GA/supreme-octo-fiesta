/*
Object.create creates a new Object with the prototype set to the specified object
Object.create is more natural to prototype model then the new keyword
Douglas Crockford created Object.create function
*/
const cat = {
  init: function(sound){
    this.sound = sound
    return this
  },
  makeSound: function(){
    // console.log('meow')
    console.log(this.sound)
  }
}
// this is what Object.create does...
// function objectCreate(proto){
//   const obj = {} // create an object
//   Object.setPrototypeOf(obj, proto) // set prototype with setPrototypeOf
//   return obj
// }
// const myCat = objectCreate(cat)
// const phil = objectCreate(cat)

const myCat = Object.create(cat).init("yo man I'm tired of meow...!")
myCat.name = "myCat"

const phil = Object.create(cat).init("meow meow...!")
phil.name = "phil"

myCat.makeSound()
phil.makeSound()
console.log(`phil is protype of cat? ${cat.isPrototypeOf(phil)}`)

const theCats = []
theCats.push(myCat, phil)
for (const cat of theCats){
  console.log(`${cat.name} says ${cat.sound} `)
}
