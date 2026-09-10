// Function declaration
function calculateSquare1(width, height) {
	return width * height;
}

console.log(calculateSquare1(10, 20));

// Function expression
const calculateSquare2 = function (width, height) {
	return width * height;
};

console.log(calculateSquare2(15, 30));

// Arrow function
const calculateSquare3 = (width, height) => width * height;

console.log(calculateSquare3(12, 28));
