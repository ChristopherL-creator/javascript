const testArray1 = [-6, 2, 5, 137, 9, 12, -123, 1.45, 200000, -23.9]; 

const testArray2 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu']; 

const testArray3 = [[1, 4, 8, 12], 
                    [34, 2.1, -23, 4], 
                    [1.1, -2000, 2, 88]]; 

// 1) funzione Min; risultato -123;
function min(array) {

    let selectedElement = [0];
    
    for (const element of array) {
        
        if (selectedElement > element) {
            selectedElement = element;
        }
    } 

    return selectedElement;

}

console.log(min(testArray1));

// 2) funzione somma solo pari; risultato 200008;
function sumEven(array) {
  
    let risultato = 0; 

        for (let i = 0; i < array.length; i++) {
            const element = array[i]; 
            
            if (element % 2 === 0) {
                risultato = risultato + element;
        }     
    }  
    return risultato;
}

console.log(sumEven(testArray1));

// 3) stringhe con più di 5 caratteri; risutlato 
// ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];
function moreThan5Chars(array) { 

    const newArray = [];
    
   for (let i = 0; i < testArray2.length; i++) {
        const element = array [i];      
        
        if(testArray2[i].length > 5) { 
            newArray.push(element);
        }
   }

    return newArray;
}

console.log(moreThan5Chars(testArray2)); 

// 4) stringa con prima lettera degli elementi maiuscola; 
// risultato["Rosso", "Verde", "Giallo", "Arancione", 
// "Magenta", "Blu"];
function FirstUpperCase(array) {

    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        const firstChar = element[0]; 
        const firstCharUpperCase = firstChar.toUpperCase(); 
        const remainingElement = element.substring(1) ;
//indice 1 prende tutte le lettere a partire dalla prima, 
//se non si specifica fine, prosegue per tutta lunghezza. 
        const newElement = firstCharUpperCase + remainingElement; 

        newArray.push(newElement); 
    
    }
        
    return newArray;
}

console.log('first uppercase', FirstUpperCase(testArray2)); 

// 5) somma degli elementi dell'array;
function superSumAll(array) {

    let result = 0; 
    // senza array.flat():
    // for (let i = 0; i < array.length; i++) {
    //     const riga = array[i]; 

    //     for (let j = 0; j < riga.length; j++) {
    //         const element = riga[j]; 
    //         result = result + element; 
    //     }
    // } 

    const flattenArray = array.flat();   
    for (let i = 0; i < flattenArray.length; i++) {
        const element = flattenArray[i]; 
        result = result + element;
        
    }

    return result;
}

console.log(superSumAll(testArray3)); 

//______ PER CASA _______________________________________________ 

// 1) clone con tutti valori diviso 3; 
function cloneAndDivideBy3(array, divider = 2) {
    
    const newArray = [];  

    for (let i = 0; i < array.length; i++) {
         const element = array[i];
         const elementDividedBy3 = element / divider;
         newArray.push(elementDividedBy3);
    }  
        
    return newArray;

} 

console.log(cloneAndDivideBy3(testArray1, 3)); 
//                              nuovo valore di "divider";

console.log(cloneAndDivideBy3(testArray1)); 
//se non dichiarato, "divider" avrà valore default 2; 
// (vedi riga 111);

// 2) clone con tutti valori < 10;
function cloneAndFilterByMax(array, max) {
    
    const newArray = []; 

        for (let i = 0; i < array.length; i++) {
            const element = array[i]; 
            if (element < max) {
                newArray.push(element);
            }   
        } 
        
    return newArray;
} 

console.log(cloneAndFilterByMax(testArray1, 10)); 
//                                         "max"; 

// 3) array con valori invertiti ( da ultimo a primo);
function reverse(array) { 
    return array.reverse();
} 

console.log(reverse(testArray1)); 

console.log(reverse(testArray2)); 

// 4) trasformare array multidimensionale in array unico;
function flatArray(array) {
    return array.flat();
} 

console.log(flatArray(testArray3));