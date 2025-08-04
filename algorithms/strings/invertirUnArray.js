const invertirArray = (array) => {
    let invertedArray = [];
    for (let i = array.length -1; i >= 0; i--){
        invertedArray.push(array[i]);
    }
    
    return invertedArray;
}

export default invertirArray;

// Example usage
// const arr = [1, 2, 3, 4, 5];
// console.log(invertirArray(arr)); // Output: [5, 4, 3, 2, 1]