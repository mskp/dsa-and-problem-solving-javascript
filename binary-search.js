function binarySearchItr(array, target) {
	let [low, high] = [0, array.length - 1];

	while (low <= high) {
		const mid = Math.floor(low + (high - low) >> 1); // Same as low + ((high - low)/2)

		if (array[mid] === target)
			return mid; // Target Found

		else if (array[mid] < target)
			low = mid + 1;

		else
			high = mid - 1;
	}
	return -1; //In case of target not being found
}

function binarySearchRec(array, target, low=0, high=array.length-1) {
	if (low > high) {
		return -1; //Target not found
	}
	const mid = Math.floor(low + (high-low) >> 1);
	
	if (array[mid] === target)
		return mid;
 
	else if (array[mid] < target)
		return binarySearchRec(array, target, mid + 1, high);

	else 
		return binarySearchRec(array, target, low, mid - 1);
}

// const array = [45, 69, 74, 122, 150, 160, 1444];
// const target = 122;
// const foundAt = binarySearchRec(array, target);
// console.log((foundAt !== -1) ? `Target Found at index ${foundAt}` : 'Target not found');

function binarySearch2D(array, target) {
	// Iterate over each array
	for (let i = 0; i < array.length; i++) {
		console.log(i)
		console.log(array[i])
		const arr = array[i];
		const result = binarySearchItr(arr, target);
		if (result !== -1) {
			return [i, result];
		}
	}
	return [-1, -1];
}

const array = [
	[2, 3, 5, 6],
	[45, 96, 120, 140],
	[80, 90, 150, 200]
]

const target = 96;
const foundAt = binarySearch2D(array, target);
console.log((foundAt !== -1) ? `Target Found at index ${foundAt}` : 'Target not found');