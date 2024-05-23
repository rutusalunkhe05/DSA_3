//Find the Intersection of Two Arrays

function intersection(array1, array2) {
    
    const set1 = new Set(array1);
    const set2 = new Set(array2);

   const smallerSet = set1.size < set2.size ? set1 : set2;
    const largerSet = set1.size < set2.size ? set2 : set1;

     const result = [];
    for (const element of smallerSet) {
        if (largerSet.has(element)) {
            result.push(element);
        }
    }

    return result;
}


const array1 = [1, 2, 2, 1];
const array2 = [2, 2];
const result = intersection(array1, array2);
console.log(result);  