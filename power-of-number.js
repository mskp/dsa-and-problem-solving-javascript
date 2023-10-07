function power(base, exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}

const base = 2;
const exp = 4;
const powerOfNumber = power(base, exp);
console.log("Power of number is", powerOfNumber)