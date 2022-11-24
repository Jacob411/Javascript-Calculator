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

const seven = document.querySelector('.seven')
seven.addEventListener('click', () => {
    alert("works")
})
