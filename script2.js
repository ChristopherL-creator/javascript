// condizionali 

// crea una finestra dove inserire il numero
// const numberinstring = prompt("inserisci numero"); 

// // parseint converte le stringhe in numeri
// const numero = parseFloat(numberinstring);

// const isEven = numberinstring % 2 === 0; 
// // is even diventa un booleano 

// const isOdd = numero % 2 === 1;

// // if (isEven) { 
// //     console.log("il numero è pari");
// // } else { 
// //     console.log(" il numero è dispari");
// // }  

// if (isEven) {
//     console.log("il numero è pari");
// } else if (isOdd) {
//     console.log("il numero è dispari");
// } else { 
//     console.log("il numer non è ne pari ne dispari");
// } 

// CALCOLATRICE

// const PrimoNumeroInStringa = prompt("inserisci il primo numero"); 

// const PrimoNumero = parseFloat(PrimoNumeroInStringa); 

// const SecondoNumeroInStringa = prompt("Inesrisci secondo numero"); 

// const SecondoNumero = parseFloat(SecondoNumeroInStringa); 

// const operazione = prompt("inserisci operazione, puoi inserire: '+', '-', '*', */*"); 

// const isAddizione = operazione === '+'; 

// const isSottrazione = operazione === '-'; 

// const isMoltiplicazione = operazione === 'x'; 

// const isDivisione = operazione === ':'; 

// if (isAddizione) {
//     const risultato = PrimoNumero + SecondoNumero;
//     console.log("risultato: " + risultato); 
// } else if (isSottrazione) {
//     const risultato = PrimoNumero - SecondoNumero; 
//     console.log("risultato: " + risultato); 
// } else if (isMoltiplicazione) {
//     const risultato = PrimoNumero * SecondoNumero; 
//     console.log("risultato: " + risultato);  
// } else if (isDivisione) {
//     const risultato = PrimoNumero / SecondoNumero; 
//     console.log("risultato: " + risultato); 
// } else {
//     console.log("operazione non ammessa"); 
// }

 

const numero = 41; 

const isDivisibilePerDue = numero % 2 === 0; 

const isDivisibilePerTre = numero % 3 === 0; 

const isDivisibilePerQuattro = numero % 4 === 0; 

// if(isDivisibilePerDue){ 
//     console.log("il numero è divisibile per 2");
// } else if (isDivisibilePerTre) { 
//     console.log("il numero è divisibile per 3");
// } else if (isDivisibilePerQuattro) { 
//     console.log("il numero è divisibile per 4");
// } else { 
//     console.log("il numero non è divisibile per nessuno dei divisori selezionati");
// } 

// fa vedere solo il primo if soddisfatto 

// if(isDivisibilePerDue){ 
//     console.log("il numero è divisibile per 2");
// } 

// if(isDivisibilePerTre){ 
//     console.log("il numero è divisibile per 3");
// } 

// if(isDivisibilePerQuattro){ 
//     console.log("il numero è divisibile per 4");
// }  

if (isDivisibilePerDue || isDivisibilePerTre || isDivisibilePerQuattro) {
   
    if(isDivisibilePerDue){ 
        console.log("il numero è divisibile per 2");
    } 
    
    if(isDivisibilePerTre){ 
        console.log("il numero è divisibile per 3");
    } 
    
    if(isDivisibilePerQuattro){ 
        console.log("il numero è divisibile per 4");
    }

} else {
     console.log("il numero non è divisibile per nessuno dei divisori selezionati");
} 

// chiedo all'utente di inserire numero 
// se numero divisibiel per 3 scrivo in console FIZZ 
// se numero divisibile per 5 scrivo in console BUZZ 
// se numero divisibile per entrambi scrivo i console FIZZBUZZ 
