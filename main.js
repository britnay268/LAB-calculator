console.log("Brit's Calculator Working")

// Gets the class of the botton to manipulated
const input = document.querySelector(".input-num")
const zero = document.querySelector(".btn-zero")
const one = document.querySelector(".btn-one")
const two = document.querySelector(".btn-two")
const three = document.querySelector(".btn-three")
const four = document.querySelector(".btn-four")
const five = document.querySelector(".btn-five")
const six = document.querySelector(".btn-six")
const seven = document.querySelector(".btn-seven")
const eight = document.querySelector(".btn-eight")
const nine = document.querySelector(".btn-nine")
const clear = document.querySelector(".btn-cancel")
const backspace = document.querySelector(".btn-backspace")



// Adds an event listener to the DOM element to change the input value

zero.addEventListener ("click", function () {
  input.innerHTML = 0
})

one.addEventListener ("click", function () {
  input.innerHTML = 1
})

two.addEventListener ("click", function () {
  input.innerHTML = 2
})

three.addEventListener ("click", function () {
  input.innerHTML = 3
})

four.addEventListener ("click", function () {
  input.innerHTML = 4
})

five.addEventListener ("click", function () {
  input.innerHTML = 5
})

six.addEventListener ("click", function () {
  input.innerHTML = 6
})

seven.addEventListener ("click", function () {
  input.innerHTML = 7
})

eight.addEventListener ("click", function () {
  input.innerHTML = 8
})

nine.addEventListener ("click", function () {
  input.innerHTML = 9
})

clear.addEventListener ("click", function () {
  input.innerHTML = 0
})

backspace.addEventListener ("click", function () {
  input.innerHTML = " "
})


// const buttons = document.querySelectorAll(".btns button")
// console.log(buttons)

// buttons.addEventListener ("click", function() {
//   input.innerHTML = 
// })
