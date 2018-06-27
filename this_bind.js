let talk = function() {
  console.log(this.sound)
}

/////////// EXAMPLE 1
let boromir = {
  speak: talk,
  sound: "One does not simply walk into mordor."
}
let gollum = {
  jabber: boromir.speak,
  sound: "My presioussss...."
}
// refactored the boromir object
// let talkBoundToBoromit = talk.bind(boromir)
// talkBoundToBoromit();
boromir.speak()
gollum.jabber()

/////////// EXAMPLE 2
let gusto = {
  sound: "gusto says 'you need to bind and understanding to this.'"
}
gusto.speak = talk.bind(gusto)
let blabber = gusto.speak
blabber()
