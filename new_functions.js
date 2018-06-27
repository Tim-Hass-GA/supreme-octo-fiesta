function Person(saying){
  this.saying = saying
}
Person.prototype.talk = function(){
  console.log('I say:', this.saying)
}
/* ///////////// what new does
1) creates a new blank object
2) look at what we call new on (constructor), find the prototype of that object
and set that prototype as the prototype of the new object created in step 1
3) look at what we call new on (constructor), going to call the function with
the new object created in step 1 assigned to the 'this' variable
4) returns and executes the new object that was created with the prototype and
this variable context...
*/
const crockford = new Person('SEMICOLANS!!!1one1')
crockford.talk()

/*
////////////////// Let's builld new
*/
function myNew(constructor){
  let obj = {} // 1 create a new OBJECT
  Object.setPrototypeOf(obj, constructor.prototype) // 2 set prototype
  ///////////// arguments keyword
  // console.log(arguments, arguments.length)

  // convert to an array in order to use slice
  // let argsArray = Array.from(arguments) // after es6...
  // console.log(argsArray.slice(1))
  let argsArray = Array.prototype.slice.apply(arguments) // this is how it had to be done before es6...
  // .apply(object to bind as this, array of args to call with)
  // constructor.apply(obj, ['another person timmy']) // 3 execute constructor with 'this'

  // constructor.apply(obj, argsArray.slice(1)) // 3 execute constructor with 'this'
  // return obj // 4 return object

  // for edge case 3 && 4 combined
  return constructor.apply(obj, argsArray.slice(1)) || obj
}
const timmy = myNew(Person, 'another person timmy')
timmy.talk()
