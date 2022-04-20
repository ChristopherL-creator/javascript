const numberinstring = prompt("inserisci numero");

const numero1 =  parseFloat(numberinstring); 

const isDivisibilePerCinque = numero1 % 5 === 0; 

const isDivisibilePerThree = numero1 % 3 === 0; 

const isDivisibilePerQuindici = numero1 % 15 === 0; 

if (isDivisibilePerCinque || isDivisibilePerThree || isDivisibilePerQuindici) {
   
    if(isDivisibilePerCinque){ 
        console.log("BUZZ");
    } 
    
    if(isDivisibilePerThree){ 
        console.log("FIZZ");
    } 
    
    if(isDivisibilePerQuindici){ 
        console.log("FIZZBUZZ");
    }

} else {
     console.log("il numero non è divisibile per nessuno dei divisori selezionati");
} 