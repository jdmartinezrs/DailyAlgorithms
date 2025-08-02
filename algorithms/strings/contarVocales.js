const contarVocal = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
    const letra = str[i].toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        count++;
    }
};
 return count;
};
export default contarVocal;




