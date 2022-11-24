function operate(operator, a, b) {
if(operator == '+') {
	return a + b
};

if(operator == '-') {
  return a - b
};
}
const sum = function(args) {
  return args.reduce((acc, curr) => (acc + curr), 0)
};

const multiply = function(a) {
  return a.reduce((acc, curr) => (acc * curr), 1)
};
const resultBox = document.querySelector('.resultBox');
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

let lastOp = 'none'
let sumOf = 0
let val1 = 0
let val2 = 0
sumArray = []
const display = function(e) {
  row1Div.textContent += e.target.textContent;
}
function clear(e) {
  sumOf = 0;
  row1Div.textContent = "";
  resultBox.textContent = "";
}

function addToEntry() {
  valToAdd = Number(row1Div.textContent)
  sumOf += valToAdd
  row1Div.textContent = ""
}
function minusToEntry() {
  val1 = row1Div.textContent
  row1Div.textContent = "-"
}
function multiplyToEntry() {
  val1 = row1Div.textContent
  row1Div.textContent = "*"
}
function equals() {
  val2 = Number(row1Div.textContent)
  let result = Number(val2) + sumOf
  resultBox.textContent = result
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