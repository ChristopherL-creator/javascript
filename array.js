// dimensione fissa, scelta dall'utente; 
// deve contenere input dello stesso tipo; 
// in javascript si possono usare tipi diversi di input, 
// cambiare dimensioni;  

// const arrayOfNumbers = [1, 5, 3, 8, 6]; 
//posizioni si contanto dalla "0"; 

// arrayOfNumbers.push(9); 
// // aggiunge elemento alla fine array;

// arrayOfNumbers.unshift(37); 
// / /aggiunge elemento a inizio array;

// const element = arrayOfNumbers.pop(); 
// // sposta ultimo elemento di array in variabile ("element");

// console.log(element); 

// const element2 = arrayOfNumbers.shift(); 
// // sposta primo elemento di array in variabile ("element2");

// console.log(element2); 

// console.log(arrayOfNumbers); 

// const elementInPosition2 = arrayOfNumbers[2];  
// // leggo elemento in posizione;

// console.log(elementInPosition2); 

// console.log(arrayOfNumbers[0]); 
// // non è obbligatorio dichiarare la posizione in variabile; 

// arrayOfNumbers[4] = 666; 
// // ho modificato elemento in quella posizione; 

// console.log(arrayOfNumbers);

// Ciclare array 

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     const element = arrayOfNumbers[i];
//     console.log("elemento array " + i, element);
// } 
// // mostra elementi corrispondeti al valore del contatore i, 
// // una riga per ogni elemento; 

// for (const element of arrayOfNumbers) {
//     console.log("forof", element);
// } 
// comprime codice sopra in una riga, al costo di i; 

// Trovare il maggiore tra gli elementi dell'array; 
// const arrayOfNumbers = [1, 5, 3, 8, 6]; 

// function max(array) { 

//     let selectedElement = 0;
    
//     for (const element of array) {
        
//         if (selectedElement < element) {
//             selectedElement = element;
//         }
//     } 

//     return selectedElement;
// } 

// console.log(max(arrayOfNumbers)); 

// Trovare il maggior tra gli elementi (negativi) dell'array; 
const arrayOfNumbers = [1, 5, 3, 8, 6]; 

// function max(array) { 
// // (array) è reltivo alla funzione; 

//     let selectedElement = arrayOfNumbers[0]; 
//     //sono sicuro che vengano considerati solo elementi  
//     //dell'array
    
//     for (const element of array) {
        
//         if (selectedElement < element) {
//             selectedElement = element;
//         }
//     } 

//     return selectedElement;
// } 

// console.log(max(arrayOfNumbers)); 

// Prende array e ne crea uno uguale con tutti elementi 
// aumentati di uno; 
// function CloneAndaddOneToArray(array) {
    
//     const newArray = []; 

//    for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const elementPlusOne = element + 1;
//         newArray.push(elementPlusOne);
//    } 

//    return newArray;
// }

// console.log(CloneAndaddOneToArray(arrayOfNumbers)); 

// Restituisce array con soli numeri pari; 
function findEvenNumbers(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        if (element % 2 === 0) {
            newArray.push(element);
        }
        
    } 
    
    return newArray
} 

console.log(findEvenNumbers(arrayOfNumbers)); 

// Somma di tutti gli elementi dell'array (sumAll, operazione 
// di riduzione, restituisce un solo valore non originario 
// dell'array); 
function sumAll(array) {
    
    let risultato = 0; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        risultato = risultato + element;
    } 

    return risultato;
} 

console.log(sumAll(arrayOfNumbers)); 
