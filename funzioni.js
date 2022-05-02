// // console.log("pippo"); 

// // alert("hi"); 

// function calcoloIpotenusa(cateto1, cateto2) {
//     const cateto1AllaSeconda = cateto1 ** 2; 
//     const cateto2AllaSeconda = cateto2 ** 2; 
//     const sommaDeiQuadrati = cateto1AllaSeconda + cateto2AllaSeconda; 
//     const ipotenusa = Math.sqrt (sommaDeiQuadrati); 
//     return ipotenusa;
// }

// const c1t1 = 4; 

// const c2t1 = 3; 

// const it1 = calcoloIpotenusa(c1t1, c2t1);

// // const c1t1AllaSeconda = c1t1 ** 2; 
// // const c2t1AllaSeconda = c2t1 ** 2; 
// // const sommaDeiQuadrati = c1t1AllaSeconda + c2t1AllaSeconda;
// // const it1 = Math.sqrt(sommaDeiQuadrati); 

// console.log('ipotenusa: ' + it1); 

// // //______________________________________________________________________________________

// // const c1t2 = 12; 

// // const c2t2 = 9; 

// // const it2 = calcoloIpotenusa(c1t2, c2t2);

// // // const c1t2AllaSeconda = c1t2 ** 2; 
// // // const c2t2AllaSeconda = c2t2 ** 2; 
// // // const sommaDeiQuadrati2 = c1t2AllaSeconda + c2t2AllaSeconda; 
// // // const it2 = Math.sqrt(sommaDeiQuadrati2); 

// // console.log('ipotenusa: ' + it2); 

// //_______________________________________________________________________________________ 

// function fizzbuzz(numero1) { 

//     const isDivisibilePerCinque = numero1 % 5 === 0; 
//     const isDivisibilePerThree = numero1 % 3 === 0; 

//     if (isDivisibilePerThree && isDivisibilePerCinque) {
//         return "FIZZBUZZ";
//     } else if (isDivisibilePerCinque){
//         return "BUZZ";
//     } else if (isDivisibilePerThree){
//         return "FIZZ";
//     } else { 
//         return "";
//     }
// }

// const numberinstring = prompt("inserisci numero");
// const numero1 =  parseFloat(numberinstring); 
// const result = fizzbuzz(numero1); 

// console.log(result); 

// for (let i = 0; i < 100; i++) {
//     const result = fizzbuzz(i); 
//     console.log(result);
// }

//_______________________________________________________________________________________ 

// for (let i = 0; i < 100; i++) {
//     fizzbuzz(i);
// }

//_______________________________________________________________________________________ 

// function elaboraDato(dato) {
    
//     const datoArrotondato = Math.round(dato); 
    
//     const datoArrotondatoAllaSeconda = datoArrotondato ** 2;  
    
//     let datoDopoSoglia; 

//     if (datoArrotondatoAllaSeconda > 10) {
//         datoDopoSoglia = 10;
//     } else {
//         datoDopoSoglia = datoArrotondatoAllaSeconda;
//     } 

//     if (datoDopoSoglia > 5) {
//         return 0;
//     } else {
//         return 1;
//     }
// } 

// const dato1 = 3.4; 

// const risultato = elaboraDato(dato1) 

// console.log(risultato); 

// const dato2 = 2; 

// const risultato2 = elaboraDato(dato2) 

// console.log(risultato2); 

// const dato3 = 27; 

// const risultato3 = elaboraDato(dato3) 

// console.log(risultato3); 

// function controllaSoglia(numero) {
//     if (numero > 10) {
//         return 10;
//     } else {
//         return numero;
//     }
// } 

// function dividi(dividendo, divisore = 2) {
    // if (!dividendo) {
    //     return "mi serve il dividendo";
    // } 

//     if (!divisore) {
//     divisore = 2; 
//    } 

//     const quoziente = dividendo / divisore; 
//     return quoziente;
// } 

// const risultato = dividi(8, 2);  
// console.log("due parametri", risultato); 
// console.log("---------"); 
// const risultato2 = dividi(8); 
// console.log("un parametro", risultato2); 
// console.log("---------"); 
// const risultato3 = dividi(); 
// console.log("zero parametri", risultato3);

// console.log("---------"); 
// dividi(8); 
// console.log("---------"); 
// dividi(); 

// let numeroInStringa = "52"; 

// let numero = parseInt(numeroInStringa, 10);  

//_____________________ Funzione anonima ______________________ 

// new function(params) {
    
// } 

// Oppure

// const aggiungiUno = function(numero) {
//     return numero + 1;
// }

// const risultato4 = aggiungiUno(5); 

// console.log("funzione anonima", risultato4); 

// Oppure funzione lambda, più moderna 

// const aggiungiUnoLambda = (numero) => numero + 1;  

// const risultato5 = aggiungiUnoLambda(8);

// console.log("funzione lambda", risultato5); 

//___________________________________________________ 

// const dividiLambda = (dividendo, divisore) => { 
    
//     const quoziente = dividendo / divisore; 
    
//     return quoziente;
// } 

// Funzioni di ordine superiore, manipolano 
// (generano, sfruttano) altre funzioni

// function somma(numero1, numero2) {
//     return numero1 + numero2;
// } 

// function sottrazione(numero1, numero2) {
//     return numero1 - numero2;
// } 

// function moltiplicazione(numero1, numero2) {
//     return numero1 * numero2;
// } 

// function divisione(numero1, numero2) {
//     return numero1 / numero2;
// } 
// si creano prima funzioni che possa usare, o si può  
// direttamente usare una funzione lambda;

// function eseguiOperazione(numero1, numero2, operazione) {
//     return operazione(numero1, numero2); 
// } 

// function resto(numero1, numero2) {
//     return numero1 % numero2;
// }

// const restoLambda = (n1, n2) => n1 % n2; 
// funzione lambda;

// console.log(eseguiOperazione(5, 3, moltiplicazione)); 

// console.log(eseguiOperazione (9, 4, (n1, n2) => n1 % n2 )); 
// si può direttamente usare una funzione lambda; metodo 
// più usato; 

// function somma1(numero) { 
//     return numero + 1;
// } 

// function somma2(numero) { 
//     return numero + 2;
// } 

// function generaSomma(numeroDaSommare) {
//     return (numero) => numero + numeroDaSommare;
// } 
// funzione superiore; 

// const sommaTre = generaSomma(3); 

// console.log(sommaTre(5)); 

// ______________ FILTERING ____________________  

//  da come risultato "True" o "False";

// const testArray = [2, 6, 8, 7, 21, 2001, 5000, 3, 12]; 

// function keepEven(array) {
    
//     const newArray = []; 

//     for (let i =  0; i <  array.length; i++ ) {
//         const element = array[i]; 

//         const isElementEven = element % 2 === 0; 

//         if(isElementEven){ 
//             newArray.push(element);
//         }
        
//     } 

//     return newArray;
// } 

// console.log('keepEven', keepEven(testArray)); 

// //--------------------------------------------------------

// function keepGreaterThan10(array) {
    
//     const newArray = []; 

//     for (let i =  0; i <  array.length; i++ ) {
//         const element = array[i]; 

//         const isElementEven = element > 10; 

//         if(isElementEven){ 
//             newArray.push(element);
//         }
        
//     } 

//     return newArray;
// } 

// console.log(keepGreaterThan10(testArray)); 

// //--------------------------------------------------------

// function filter(array, filterFunction) {
    
//     const newArray = []; 

//     for (let i =  0; i <  array.length; i++ ) {
//         const element = array[i]; 

//         const isElementToAdd = filterFunction(element); 

//         if(isElementToAdd){ 
//             newArray.push(element);
//         }
        
//     } 

//     return newArray;
// } 

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     } 
// // return number % 2 === 0; 
// } 

// function isGreaterThan10(number) { 
//     return number > 10;
// }

// console.log('isEven', filter(testArray,isEven)); 
// // passo a funzione superiore l'array "testArray", 
// // e funzione "isEven"; 

// console.log('isGreaterThan10', filter(testArray,isGreaterThan10)); 
// console.log('lambda dispari', filter(testArray, (number) => number % 2 === 1)); 
// // passo una lambda;


// console.log('preset filter', testArray.filter(isEven)); 
// esiste già una funzione "filter": array.filter(funzione); 

// ___________ MAPPING ________________________ 

// const testArray = [2, 6, 8, 7, 21, 2001, 5000, 3, 12];

// function addOneToAllElements(array) {
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 

//         const newElement = element + 1; 
// //      elemento mapping;

//         newArray.push(newElement); 

//     } 

//     return newArray;
// } 

// function map(array, mappingFunction) {
//     const newArray = []; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 

//         const newElement = mappingFunction(element); 
// //                          mapping function;

//         newArray.push(newElement); 

//     } 

//     return newArray;
// } 

// console.log('addOneToAllElements', (addOneToAllElements(testArray)) ); 

// // Mapping function, prende stesso elemento, 
// // e lo restituisce cambiato;
// function addOne(element) {
//     return element + 1;
// } 

// console.log('map addOne', map(testArray, addOne)); 

// console.log("javascript map", testArray.map(addOne)); 
// // funzione javascript, usata più spesso; 

// console.log('lambda map square', map(testArray, (element) => element * element)); 
// // mapping con lambda; 

// console.log('javascript map square', testArray.map((element) => element * element)); 
// // mapping con funzione javascript; 

// // ____________________ REDUCING _______________________________ 

// function sumAll(array) {
    
//     let result = 0; 

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 

//         result = result + element;
        
//     } 

//     return result;
// } 

// function multiplyAll(array) {
    
//     let result = 1; 
// //  funzioni di reducing non lavorano mai su valori iniziali vuoti;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]; 

//         result = result * element;
        
//     } 

//     return result;
// }

// console.log(sumAll(testArray)); 

// function reducerSumAll(previous, current) {
// //  "previous" arriva da giro precedente, "current" è il primo elemento 
// //  dell'array, lo sto analizzando in questo momento;

//     const result = previous + current; 
//     return result;
// } 
// console.log('somma tutti reduce lambda', testArray.reduce((p,c) => p + c, 0)); 
// console.log('somma tutti reduce', testArray.reduce(reducerSumAll, 0)); 
// //                                                      valore di partenza: 0; 
// //  se non do valore di partenza, prende come primo elemento il primo elemento 
// //  dell'array, e come secondo il secondo; 
// function reduceMultiplyAll(previous, current) {
//     const result = previous * current; 
//     return result;
// }

// console.log('moltiplica tutti reduce', testArray.reduce(reduceMultiplyAll, 1)); 

// //  reduce per funzione flitering: 

// function filterHigherThan2(element) { 
//     if ( element > 2) { 
//         return true;
//     } else { 
//         return false;
//     }
// } 

// // console.log('moltiplica tutti reduce', testArray.reduce(, 1)); 

// function reducerSumAllEvenIndex(previous, current, index) {
//     if (index % 2 === 0) {
//         const result = previous + current; 
//         return result;
//     } else {
//         return previous;
//     }
// }

// console.log(testArray.reduce(reducerSumAllEvenIndex, 0)); 

//  ____________ SORTING ________________________________________  

// sorting tramite funzione:
function sortNumbers(el1, el2){ 
    if (el1 > el2) {
        return 1;
    } else if (el1 < el2) {
        return -1;
    } else { 
        return 0;
    } 
} 

//  Sorting  da 1 per ordine giusto, -1 per ordine sbagliato, sennò 0;

const arrayOfNumbers = [1, 5, 3, 8, 6]; 

arrayOfNumbers.sort(sortNumbers2); 

const arrayOfStrings = ['balcone', 'aritmetica', 'giallo', 'zuzzerellone']; 

//  inserisco la funzione che voglio vedere tra le parentesi;
arrayOfStrings.sort(sortStrings); 

console.log(arrayOfStrings); 

console.log(arrayOfNumbers); 

//  ho dovuto invertire primo e secondo return da sortNumbers;
//  const testArray4 = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34]; 

//  testArray4.sort(); 

//  console.log(testArray4);

//  dal più grande al più piccolo (numeri);
function sortNumbers2(el1, el2) {
    return el2 - el1;
}

//  sorting di stringhe: 
function sortStrings(el1, el2) {
    return el1.localeCompare(el2) * -1;
} 

//  sorting per lunghezza:
function compareStringByLength(el1, el2) {
    return el1.length - el2.length;
}