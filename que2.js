//2.Count Frequency of Elements//

function countFrequency(array) {
    const frequencyMap = new Map();
    
    for (const element of array) {
        if (frequencyMap.has(element)) {
            frequencyMap.set(element, frequencyMap.get(element) + 1);
        } else {
            frequencyMap.set(element, 1);
        }
    }
    
    return frequencyMap;
}
const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequency = countFrequency(array);

frequency.forEach((value, key) => {
    console.log(`Element ${key} occurs ${value} times.`);
});

