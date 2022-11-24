const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(args) {
  return args.reduce((acc, curr) => (acc + curr), 0)
};

const multiply = function(a) {
  return a.reduce((acc, curr) => (acc * curr), 1)
};

const row1Div = document.querySelector('.row1');
const plusDiv = document.querySelector('.plus');
const nineDiv = document.querySelector('.nine');
const eightDiv = document.querySelector('.eight');
const sevenDiv = document.querySelector('.seven');
const fourDiv = document.querySelector('.four');
const fiveDiv = document.querySelector('.five');
const sixDiv = document.querySelector('.six');
const oneDiv = document.querySelector('.one')
const timesDiv = document.querySelector('.times')
const twoDiv = document.querySelector('.two') 
const threeDiv = document.querySelector('.three') 
const minusDiv = document.querySelector('.minus');
const zeroDiv = document.querySelector('.zero');
const decimalDiv = document.querySelector('.decimal');
const clearDiv = document.querySelector('.clear');
const equalsDiv = document.querySelector('.equals');


sumArray = []
const display = function(e) {
  row1Div.textContent += e.target.textContent;
}
function clear(e) {
  sumOf = 0;
  row1Div.textContent = "";
  sumArray = []
}

function addToEntry() {
  val1 = row1Div.textContent
  sumArray.push(val1)
  sumArray.push('+')
  row1Div.textContent = "+"
  alert(sumArray)
}
function minusToEntry() {
  val1 = row1Div.textContent
  sumArray.push(val1)
  sumArray.push('-')
  row1Div.textContent = "-"
  alert(sumArray)
}
function multiplyToEntry() {
  val1 = row1Div.textContent
  sumArray.push(val1)
  sumArray.push('*')
  row1Div.textContent = "*"
  alert(sumArray)
}
function equals() {
  alert("equals")
  for(let i =0; i < sumArray.length; i++) {
    if(typeof sumArray == 'number')
  }
}
sevenDiv.addEventListener('click', display);
eightDiv.addEventListener('click', display);
nineDiv.addEventListener('click', display);
fiveDiv.addEventListener('click', display);
sixDiv.addEventListener('click', display);
fourDiv.addEventListener('click', display);
oneDiv.addEventListener('click', display);
twoDiv.addEventListener('click', display);
threeDiv.addEventListener('click', display);

clearDiv.addEventListener('click', clear);
plusDiv.addEventListener('click', addToEntry);
minusDiv.addEventListener('click', minusToEntry);
timesDiv.addEventListener('click', multiplyToEntry);
equalsDiv.addEventListener('click', equals);