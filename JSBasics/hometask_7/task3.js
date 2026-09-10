function divide(numerator, denominator) {
	if (denominator == 0) {
		throw new Error('Division by zero is not allowed');
	}

	if (isNaN(denominator)) {
		throw new Error('Denominator must be a number');
	}

	if (isNaN(numerator)) {
		throw new Error('Numerator must be a number');
	}

	return numerator / denominator;
}

try {
	console.log(divide(10, '0'));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}

try {
	console.log(divide(10, 0));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}

try {
	console.log(divide(10, 2));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}

try {
	console.log(divide(10, 'test'));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}

try {
	console.log(divide(10, NaN));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}

try {
	console.log(divide(NaN, NaN));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}

try {
	console.log(divide(NaN, 6));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}

try {
	console.log(divide('string', 6));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}

try {
	console.log(divide(0, 6));
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Function completed');
}
