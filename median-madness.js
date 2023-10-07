const distinctAverages = function(emotions) {
    const uniqueAverages = new Set();

    emotions.sort((a, b) => a - b);

    while (emotions.length >= 2) {
        const minEmotion = emotions.shift();
        const maxEmotion = emotions.pop();

        const average = (minEmotion + maxEmotion) / 2;
        uniqueAverages.add(average);
    }

    return uniqueAverages.size;
};

let nums = [4,1,4,0,3,5]

console.log(distinctAverages(nums));