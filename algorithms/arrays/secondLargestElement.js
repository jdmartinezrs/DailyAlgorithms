/*export default function segundoMasLargo(arr){
    if(arr.length < 2) return null;
    const ordenado = [...arr].sort((a, b)=> b.length - a.length);
return ordenado[1];
}*/


/*export default function thirdLargest(arr){
    if(arr.lenght < 3) return null;
    const ordenar = [...arr].sort((a,b) => b.length -a.length)
    return ordenar[2];
}
*/

export default function secondLrgest (arr){
    if(arr < 2) return null;
    const order = [...arr].sort((a,b)=>b.lenght - a.lenght);
    return order [1]
}


