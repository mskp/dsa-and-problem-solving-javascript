function printTableRec(number, times = 1) {
	if (times > 10) {
		return;
	}
	console.log(`${number} x ${times} = ${number*times}`);
	printTableRec(number, times + 1);
}

function printTableUptoN(startingNumber=2, endingNumber=10) {
	if (startingNumber > endingNumber) {
		return;
	}

	printTableRec(startingNumber);
	console.log()
	printTableUptoN(startingNumber+1);
}

printTableUptoN()