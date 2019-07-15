export const checkCalculateAccessibility = (numbers = {}) => {
    const { firstField = [], secondField = [] } = numbers;
    const firstNumbersEnough = firstField.length === 8;
    const secondNumbersEnough = secondField.length === 1;

    return firstNumbersEnough && secondNumbersEnough;
};

export const generateNumberArrays = (configArray = [8, 1], minBound = 1, maxBound = 21) => {
    if (!configArray || !configArray.length) {
        return [];
    }

    const generateIntegers = () => Math.floor(Math.random() * (maxBound - minBound)) + minBound;
    const resultArray = configArray.map((arraySize) => {
        const initArray = new Array(arraySize);
        const filledArray = initArray.map(generateIntegers);
        return filledArray;
    });

    return resultArray;
}

export const checkFieldResult = (userNumbers, randomNumbers, minMatches) => {
    let matches = 0;
    for (selectedNumber of userNumbers) {
        if (randomNumbers.includes(selectedNumber)) matches++;
        if (matches === minMatches) break;
    }
    return matches >= minMatches;
};