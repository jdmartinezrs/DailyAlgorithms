

export function caso1CuadradoIgualARaices(area){
    let lado = Math.sqrt(area);
    console.log("Raiz cuadrada del area es",lado)
    let confirmacion = lado * lado
    console.log("Comprobar que area es igual a la multipilcación de lado * lado",confirmacion)
    let result = confirmacion;
    return result
}


export function calcularLado (area){
    let lado = Math.sqrt(area)
    console.log('Raiz cuadrada de área',lado)
    return lado
}

export default calcularLado;;


