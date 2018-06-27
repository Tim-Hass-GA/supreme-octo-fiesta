// sound is not private...
// class is a thin layer on top of the prototype

class Mammal {
  constructor(sound){
    this.sound = sound
  }

  talk(){
    return this.sound
  }
}

class Dog extends Mammal {
  constructor(){
    super('waffellllllllinig')
  }
}

let fluffykins = new Dog()
let x = fluffykins.talk()
console.log(x)
