const numberinstring = prompt("inserisci numero");

const numero1 =  parseFloat(numberinstring); 

const isDivisibilePerCinque = numero1 % 5 === 0; 

const isDivisibilePerThree = numero1 % 3 === 0; 

// const isDivisibilePerQuindici = numero1 % 15 === 0; 

// if (isDivisibilePerCinque || isDivisibilePerThree || isDivisibilePerQuindici) {
   
//     if(isDivisibilePerCinque){ 
//         console.log("BUZZ");
//     } 
    
//     if(isDivisibilePerThree){ 
//         console.log("FIZZ");
//     } 
    
//     if(isDivisibilePerQuindici){ 
//         console.log("FIZZBUZZ");
//     }

// } else {
//      console.log("il numero non è divisibile per nessuno dei divisori selezionati");
// } 

// usando solo due variabili 

// if (isDivisibilePerThree && isDivisibilePerCinque) {
//     console.log("FIZZBUZZ");
// } else if (isDivisibilePerCinque){
//     console.log("BUZZ");
// } else if (isDivisibilePerThree){
//     console.log("FIZZ")
// } 

// usando let (riscrivibile)

let result =''; 

if (isDivisibilePerThree) {
    // result = result + 'FIZZ'; 
    result += 'FIZZ';
}

if (isDivisibilePerCinque) { 
    // result = result + 'BUZZ'; 
    result += 'BUZZ';

}
console.log(result); 

// "+=" : let es = 5; es += 8: 13; equivale a es = es + 8; 

let i = 0; 

i = i + 1; 

i += 1; 

// i++= i+1; 

// i--;