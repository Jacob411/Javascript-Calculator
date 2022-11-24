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
row1 = document.querySelector('.row1')
let sumOf = 0;
row1.textContent = sumOf
const seven = document.querySelector('.seven')
function display(e) {
  const divToChange = document.getElementById(e.target.id)
  divToChange.style.background= 'blue'

  e.stopPropagation()
}
seven.addEventListener('click', display)