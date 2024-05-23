//Move All Zeros to End

function moveZerosToEnd(array) {
    let index = 0; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[index] = array[i];
            index++;
        }
    }
 for (let i = index; i < array.length; i++) {
        array[i] = 0;
    }

    return array;
}


const array = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
const result = moveZerosToEnd(array);
console.log(result); 