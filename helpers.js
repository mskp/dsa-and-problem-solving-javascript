export function findMax(arr, start, end) {
    let maxElementIndex = start;
    for (let i = start; i <= end; i++)
        if (arr[i] > arr[maxElementIndex])
            maxElementIndex = i;
    return maxElementIndex;
}

export function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

export function generateRandomArray(length, minValue, maxValue) {
    const randomNumbersArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        randomNumbersArray.push(randomNumber);
    }

    return randomNumbersArray;
}