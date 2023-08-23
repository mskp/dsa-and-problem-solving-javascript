import {swap} from "./helpers.js";

function bubbleSort(array) {
	const newArray = [...array];
	const length = newArray.length;
	for (let i = 0; i < length; i++) {
		let swapped = false;
		for (let j = 1; j < length - i; j++) {
			if (newArray[j] < newArray[j-1]){
				swapped = true;
				swap(newArray, j, j-1);
			}
		}
		if (!swapped) {
			return newArray; // Either the array has been sorted or it was already sorted
		}
	}
	return newArray;
}

const arrayToSort = [3, 2, 67, 2 , 90, 4, 6, 400, 200];
const sortedArray = bubbleSort(arrayToSort);
console.log(sortedArray);