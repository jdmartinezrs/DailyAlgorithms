const esPalindromo=(cadena) =>{
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g,'');
    const cadenaReversed = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaReversed;
}
//export default esPalindromo;


const esPalindromo2 = (word) => {
    const palabra = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palabraReversed = palabra.split('').reverse().join('');
    return palabra === palabraReversed;
}

export default esPalindromo2;

