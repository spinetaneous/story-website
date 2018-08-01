// IDEA : having arrays with choices + choice msgs linked together via index

// array for first choices
var choice1 = [
  "have eyes for ears",
  "have one million dollars",
  "lose all your money and valuables",
  "be invisible",
  "be very smart but very weak",
  "be completely bald",
  "have a horse's tail",
  "live without internet"
];
// array for messages corresponding to first choices
var msg1 = [
  "You'd see very well!",
  "You'd be very rich!",
  "Goodbye money!",
  "Whoa, where did you go!?",
  "Can you do my homework?",
  "Your head would be so shiny...",
  "So fluffy!",
  "Goodbye computer!"
];

// array for second choices
var choice2 = [
  "have ears for eyes",
  "never get sick",
  "lose all the pictures you've ever taken",
  "be able to fly",
  "be very strong but not very smart",
  "be completely covered in hair",
  "have a unicorn's horn",
  "live without AC or heater"
];
// array for messages corresponding to second choices
var msg2 = [
  "You'd hear very well!",
  "Your health would be perfect!",
  "Goodbye pictures!",
  "Say, \"Hi!\" to the birds for me!",
  "Can you carry all my boxes for me?",
  "Are you a werewolf?",
  "So shiny!",
  "Hope you can survive the weather!"
];

// var randNum = Math.floor(Math.random() * (choice1.length));
// putting ^this line^ here won't work because each html page load
// will reset the value

function setRandNum() {
  // sets the random number we'll be using
  // necessary to put into a function because
  // otherwise each html page will reload the .js file
  // and reset our randNum
  var randNum = Math.floor(Math.random() * (choice1.length));

  // save randNum into local storage
  localStorage.setItem("randNum", randNum);
}

function getChoice1() {
  // find button1 and give it a value from choice1
  var randNum = localStorage.getItem("randNum");
  document.getElementById('button1').value = choice1[randNum];
}

function getChoice2() {
  // find button2 and give it a value from choice2
  var randNum = localStorage.getItem("randNum");
  document.getElementById('button2').value = choice2[randNum];
}

function getMsg1() {
  // find header and give it a msg from msg1
  // use innerHTML to write to choice1.html
  var randNum = localStorage.getItem("randNum");
  document.getElementById('msg1').innerHTML = msg1[randNum];
}

function getMsg2() {
  // find header and give it a msg from msg2
  // use innerHTML to write to choice2.html
  var randNum = localStorage.getItem("randNum");
  document.getElementById('msg2').innerHTML = msg2[randNum];
}
