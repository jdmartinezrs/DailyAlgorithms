export function findFactorialOfANumber (num){
    let resultado = 1;
    for (let i = 1; i <= num; i++){
         resultado = resultado * i
    }
      return resultado 
}

export function factory(numero){
    let resilt = 1;
    for (let i = 1; i<= numero; i++ ){
        resilt *= i
    }
    return resilt;
}