//3.Find the Second Largest Element

 
function findSecondLargest(array) {
    if (array.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of array) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    if (secondLargest === -Infinity) {
        throw new Error("No second largest element found");
    }

    return secondLargest;
}

// Example usage:
const array = [12, 35, 1, 10, 34, 1];
const secondLargest = findSecondLargest(array);
console.log(`The second largest element is ${secondLargest}`);  // Output: The second largest element is 15
