function operate(operator, a, b) {
if(operator == '+') {
	return a + b
}
else if(operator == 'none') {
  return a + b
}
else if(operator == '-') {
  return a - b
}
else if(operator == '*') {
  return a * b
}
else if(operator == '/') {
  return a / b
}
else {
  return 99999;
}

}
const sum = function(args) {
  return args.reduce((acc, curr) => (acc + curr), 0)
};

const multiply = function(a) {
  return a.reduce((acc, curr) => (acc * curr), 1)
};

const resultBox = document.querySelector('.resultBox');
const row1Div = document.querySelector('.row1');
const divideDiv = document.querySelector('.divide')
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
const backspaceDiv = document.querySelector('.backspace');

let lastOp = 'none'
let firstVal = 0
let lastVal = 0
let total = 0
const display = function(e) {
  if(e.target.textContent == '.') {
    if(row1Div.textContent.includes('.')){
      return;
    }
    else {
      row1Div.textContent += '.';
    }
  }
  else {
    row1Div.textContent += e.target.textContent;
    value += e.target.textContent;
  }
}
function backspaceCommand() {
  row1Div.textContent = row1Div.textContent.slice(0, -1)
}
function clear(e) {
  total = 0;
  row1Div.textContent = "";
  resultBox.textContent = "";
}

function addToEntry() {
  lastVal = Number(row1Div.textContent)
  row1Div.textContent = ""
  total = operate(lastOp, total, lastVal)
  //total += lastVal
  lastOp = '+'
}
function minusToEntry() {
  lastVal = Number(row1Div.textContent)
  row1Div.textContent = ""
  total = operate(lastOp, total, lastVal)
  lastOp = '-'
}
function multiplyToEntry() {
  lastVal = Number(row1Div.textContent)
  row1Div.textContent = ""
  total = operate(lastOp, total, lastVal)
  lastOp = '*'
}
function divideToEntry() {
  lastVal = Number(row1Div.textContent)
  row1Div.textContent = ""
  total = operate(lastOp, total, lastVal)
  lastOp = '/'
}
function equals() {
  lastVal = Number(row1Div.textContent)
  total = operate(lastOp, total, lastVal)
  row1Div.textContent = ""
  resultBox.textContent = total;
  lastOp = 'none'
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
zeroDiv.addEventListener('click', display);
decimalDiv.addEventListener('click', display);

clearDiv.addEventListener('click', clear);
plusDiv.addEventListener('click', addToEntry);
minusDiv.addEventListener('click', minusToEntry);
timesDiv.addEventListener('click', multiplyToEntry);
divideDiv.addEventListener('click', divideToEntry)
equalsDiv.addEventListener('click', equals);
backspaceDiv.addEventListener('click', backspaceCommand)