console.log('js is here....')

let dog = {
  sound: 'woof',
  talk: function(){
    console.log(this.sound)
  }
}

// dog.talk()
//
// let talkFunction = dog.talk
// let boundFunction =
//   talkFunction.bind(dog)
// boundFunction()

let button = document.getElementById('myButton')

button.addEventListener(
  'click',
  dog.talk.bind(dog)
)
