//import countvowers from './algorithms/countRepitedCharacters.js';
//import isAnagram from './algorithms/strings/anagrams.js';
//port esPalindromo from './algorithms/strings/palindromos.js'
//import contarVocal from './algorithms/strings/contarVocales.js';
//import records from './algorithms/arrays/arraysUno.js';
//import esPalindromo2 from './algorithms/strings/palindromos.js';
//import countRepetedCharacters from './algorithms/strings/countRepitedCharacters.js';
//import invertArrayConMethod from './algorithms/strings/invertirUnArray.js';
//import invertirArray from './algorithms/strings/invertirUnArray.js';

import  secondLrgest  from './algorithms/arrays/secondLargestElement.js'
export default function main() {

const arr = ['hola', 'adios', 'buenos dias', 'buenas noches'];
const result = secondLrgest (arr);
console.log(result); 




/*
const palabras = ['hola','olas'];
const palabras2 = [...palabras];
palabras.push('breaks');
console.log('esto equivale a la copia palabras 2',palabras2)
console.log('esto equivale a palabras',palabras)
const resultado = segundoMasLargo(palabras);
console.log(resultado); 
  /*
/*const array = [1, 2, 3, 4, 5];
console.log(invertArrayConMethod(array))*/

//console.log(countRepetedCharacters(0));
//console.log(esPalindromo2("Anitalavala tina")); // true
//console.log(contarVocal("amazonas"));
//nsole.log(esPalindromo("Anita lava la tina")); 
// true
  //  console.log(isAnagram("roma", "amor"));
    // Example usage of countvowers function
    /*const str = "hello world";
    const caracter = "l";
    const result = countvowers(str, caracter);
    console.log(`The character '${caracter}' appears ${result} times in the string "${str}".`);*/
}

main();






