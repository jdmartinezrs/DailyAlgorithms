const esPalindromo=(cadena) =>{
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g,'');
    const cadenaReversed = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaReversed;
}
export default esPalindromo;




