/* El algoritmo de Euclides sirve para encontrar el máximo común divisor (MCD) de dos números enteros, es decir, el número más grande que divide a ambos sin dejar residuo.*/

export default function mcd(a,b){
    //Mientras b no sea 0, seguimos calculando
    while (b !== 0){
        let resto = a % b; // obtenemos el resto de dividir a entre b
        a = b; // el número más pequeño pasa a ser el nuevo 'a'
        b = resto; // el resto pasa a ser el nuevo 'b'
    }
  return a;  //Cuando b llega a 0, 'a' contiene el MCD
}



