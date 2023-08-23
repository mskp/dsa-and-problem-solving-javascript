function linearSearch(array, target) {
	for(let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}
	return 1; // In case of element not being found
}

function linearSearchRec(array, target, index=0) {
	if (index > array.length - 1) {
		return -1; // In case of target not being found
	}
	if (array[index] === target) {
		return index; // If target found return the index
	}
	return linearSearch(array, target, index+1);
}

const array = [45, 69, 74, 122, 150, 160, 1444];
const target = 45;
const foundAt = linearSearchRec(array, target);
console.log((foundAt !== -1) ? `Target Found at index ${foundAt}` : 'Target not found');