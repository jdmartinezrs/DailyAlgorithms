/*export default function countvowers(str, caracter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            count++;
        }
    }
    return count;
}*/

const numberArray= [1, 2, 3, 4, 5, 1, 4, 8, 2];

const countRepetedCharacters = (array) => {
    
    let count =0;
    for(let i = 0; i < numberArray.length; i++){
        if(numberArray[i] === array){
            count++;
        }
    }
    return count;
}

export default countRepetedCharacters;