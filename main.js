//task 1 and task 2
function show() {
  let eye = document.getElementById("myInput");
  if (eye.type === "password") {
    eye.type = "text";
  } else {
    eye.type = "password";
  }
}

// task 2
let check = () => {
  let input = document.getElementById('myInput')
  let status = document.getElementById('status')
  let eye = document.getElementById('eye')
  let lock = document.getElementById('lock')
  let arr = Array.from(input.value)
  let l = arr.length
  if( l <= 4) {
    status.innerText = "Too weak"
    status.classList.add('red')
    input.classList.add('border')
    lock.classList.add('red')
    eye.classList.add('red')
  } else if (l <= 6) {
    status.innerText = "Not bad"
    status.classList.add('yellow')
    input.classList.add('border2')
    lock.classList.add('yellow')
    eye.classList.add('yellow')
  } else if (l >= 6) {
    status.innerText = "Strong"
    status.classList.add('green')
    input.classList.add('border3')
    lock.classList.add('green')
    eye.classList.add('green')
  }
  
}

// task 3
let btn = document.getElementById('btn')
let width = document.getElementById('width')
let height = document.getElementById('height')
let radius = document.getElementById('radius')
let color = document.getElementById('color')
let item = document.getElementById('item')
btn.addEventListener("click", ()=> {
   item.style.background = color.value
   item.style.height = height.value  
   item.style.width = width.value  
   item.style.borderRadius = radius.value
})