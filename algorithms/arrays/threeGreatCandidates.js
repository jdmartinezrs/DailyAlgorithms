//Algoritmo de Boyer-Moore Majority Voting
export default function threeGreatCandidates  (arr) {
    
    let candidate1 = null , candidate2 = null;
    let counter = 0 , counterDos= 0;

    for (let i = 0; i < arr.length; i++){
    const num = arr[i]

    if (num === candidate1) {
        counter++;
    }
    else if ( num === candidate2) {
        counterDos++;
    }   
    else if (counter === 0) {
        candidate1 = num;
        counter = 1;
    }
    else if (counterDos === 0) {
        candidate2 = num;
        counterDos = 1;
    }
    else {
    counter--;
    counterDos--;
}
}
counter = 0;
counterDos= 0;

for(const num of arr){
    if(num === candidate1)counter++;
    else if (num === candidate2) counterDos++;
}

const result = [];
const n = arr.length;
if (counter> Math.floor(n / 3)) result.push(candidate1);
if(counterDos > Math.floor(n / 3)) result.push(candidate2);
return result
};


/*const numbers = [1, 2, 2, 3, 2, 5, 4, 5, 8, 2, 4, 4, 2, 4, 4];
// Paso 1: Contar ocurrencias
const counts = {};
for (const num of numbers) {
  counts[num] = (counts[num] || 0) + 1;
}
// Paso 2: Convertir a array y ordenar por frecuencia
const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
// Paso 3: Obtener los dos números más frecuentes
const top2 = sorted.slice(0, 2).map(entry => Number(entry[0]));
console.log(top2); // Ejemplo de salida: [2, 4]
*/