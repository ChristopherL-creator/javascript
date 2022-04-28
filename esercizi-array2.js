const testArray4 = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34]; 

const testArray5 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu']; 

const testArray6 = [true, 'pippo', 204, 'verde', 3000, 100, false];



//filtrare testArray4 in modo che rimangano solo numeri 
// positivi;

// function filteringPositivesNew(number) {
    
//     return number > 0;
// } 
// console.log(testArray4.filter(filteringPositivesNew));

// console.log(testArray4.filter((number) => number > 0));

// //  filtrare testArray4 in modo che rimangano solo numeri 
// //  divisibili per 3;
// function onlyDivisibleBy3(element) {
    
//     if (element % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// } 
// console.log(testArray4.filter(onlyDivisibleBy3));

// console.log(testArray4.filter((number)=>number%3===0));


// //  filtrare testArray4 in modo che rimangano solo numeri 
// //  divisibili per 3 e 4;
// function divisibleBy3And4(element) {

//     const isDivisibilePer3 = element % 3 === 0;
//     const isDivisibilePer4 = element % 4 === 0;
//     if (isDivisibilePer3 && isDivisibilePer4) {
//         return true; 
//     } else { 
//         return false
//     } 
// } 

// console.log(testArray4.filter(divisibleBy3And4));

// console.log(testArray4.filter((number )=> (number % 3 ===  0) && (number % 4 === 0)));

// //  filtrare testArray5 in modo che rimangano solo le 
// //  stringhe più corte di 6 lettere; 
// function moreThan6Chars(element) {

//     const shorterThan6 = element.length < 6; 
//     if (shorterThan6) {
//         return true; 
//     } else { 
//         return false;
//     }
// } 
// console.log(testArray5.filter(moreThan6Chars));

// console.log(testArray5.filter((stringa) => stringa.length < 6));

// //  filtrare testArray5 in modo che rimangano solo le 
// //  stringhe che contengono la lettera 'n'; 
// function containsOnlyN(element) {
    
//     if (element.includes ('n')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(testArray5.filter(containsOnlyN));

// console.log(testArray5.filter((stringa) => stringa.includes ("n")));

// //  filtrare testArray6 in modo che rimangano solo i numeri; 
// function onlyNumbers(element) {
     
//     if (typeof element === 'number') {
//         return true; 
//     } else { 
//         return false;
//     }
// } 

// console.log(testArray6.filter(onlyNumbers));

// console.log(testArray6.filter((element) => typeof element === 'number'));

// //  mappare testArray4 dividendo tutti i numeri per 3;
// function mapDiv3(element) {
    
//     return element / 3;
// } 
// console.log(testArray4.map(mapDiv3)); 

// console.log(testArray4.map((number) => number / 3));


// //  mappare testArray4 facendo la radice quadrata di tutti i 
// //  numeri;
// function sqrRoot(element) {

//     return Math.sqrt(element)
// } 
// console.log(testArray4.map(sqrRoot));

// console.log(testArray4.map((number) => Math.sqrt(number)));

// //  mappare testArray4 sommando 1 solo ai numeri dispari; 
// function mapOddPlus1(element) {
    
//     if (element % 2 !== 0) {
//        const odd = element + 1; 
//        return odd;
//     } else {
//         return element;
//     }
// } 
    
// console.log(testArray4.map(mapOddPlus1)); 

// //  operatore ternario: condizione ? cosa succede se vera : cosa se falso;
// console.log(testArray4.map((element) => element % 2 === 0 ? element : element + 1));

// //  mappare testArray5 rendendo maiuscole la prima e l'ultima 
// //  lettera di ogni parola; 
// function firstLastUpperCase(element) {

//     const firstChar = element[0]; 
//     const firstCharUpper = firstChar.toUpperCase(); 
//     const lastChar = element[element.length - 1]; 
//     const lastCharUpper = lastChar.toUpperCase(); 
//     const remainingString = element.substring(1, element.length - 1); 
//     const newString = firstCharUpper + remainingString + lastCharUpper; 

//     return newString; 
// } 

// console.log(testArray5.map(firstLastUpperCase)); 
// console.log(testArray5.map((element) => element[0].toUpperCase() + element.substring(1, element.length -1) + element[element.length -1].toUpperCase()));

// //  mappare testArray5 aggiungendo in fondo ad ogni stringa la 
// //  lunghezza della stessa; 

// function appendLength(element) {
//     const newElement = element + ', ' + element.length; 
//     return newElement;
// } 

// console.log(testArray5.map(appendLength)); 

// console.log(testArray5.map((element) => element + ', ' + element.length)); 

// //  filtrare elementi di testArray4, in modo che rimangano quelli con 
// //  indice pari; 

// function filterByIndex(element, index) { 
// //  devo inserire sempre 2 parametri se voglio lavorare sull'index, sennò
// //  mi prende comunque element;
//     if (index % 2 === 0) { 
//         return true;
//     } else{ 
//         return false;
//     }
// } 

// console.log(testArray4.filter(filterByIndex));  
// console.log(testArray4.filter((e, i) => i % 2 === 0));

// //  mappare testArray4, così che ad ogni elemento venga sommato (se esiste) 
// //  il successivo; 

// function addNext(element, index, array) {
    
//     const nextIndex = index + 1; 
    
//     if (nextIndex < array.length) { 
// //  finché nextIndex non supera la lunghezza dell'array;
//         const nextElement = array[nextIndex]; 
//         const result = element + nextElement; 
//         return result; 
//     } else { 
//         return element;
//     }
// } 

// console.log(testArray4.map(addNext)); 
// console.log( testArray4.map((e, i, a) => (i + 1 < a.length)? e + a[i + 1] : e)); 
