// in javascript prototypes provide inheritance
// prototypes and classes are different
// prototypes delegate performance of actions on a functions behalf
// they do not create a copy (classes do create a copy...)
function talk(){
  // console.log(this)
  console.log(this.sound)
}
let animal = {
  talk
}
let cat = {
  sound: "meow!"
}
let dog = {
  sound: "woof!"
}
// setPrototypeOf - is not typically used in real applications
// this example helps clarify the core concept of prototype
Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
cat.talk()
// this will reassign the value of talk
// this simply demonstrates that the prototype
// can be modified
animal.talk = function(){
  console.log("I'm a little teapot (" + this.sound + ')')
}
dog.talk()
// set up a prototype chain...
let prarieDog = {
  howl: function(){
    console.log(this.sound.toUpperCase())
  }
}
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()
