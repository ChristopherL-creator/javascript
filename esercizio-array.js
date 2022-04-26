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

    const newArray = []; 
        for (let i = 0; i < array.length; i++) {
            const element = array[i]; 
            if (element % 2 === 0) {
                newArray.push(element);
        }     
    } 
    for (let i = 0; i < newArray.length; i++) {
        const element2 = newArray[i]; 
        risultato = risultato + element2;
    }  
    return risultato
}

console.log(sumEven(testArray1));

// 3) stringhe con più di 5 caratteri; risutlato 
// ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];
function moreThan5Chars(array) { 

    const newArray3 = [];
    
    for (const element of array) { 
        const charLenght = element.lenght;
        if (charLenght > 5) {; 
        newArray3.push(element);
        }
       
    } 

    return newArray3;
}

console.log(moreThan5Chars(testArray2)); 

// 4) ["Rosso", "Verde", "Giallo", "Arancione", "Magenta", "Blu"];
function FirstUpperCase(array) {
  
}

console.log(FirstUpperCase(testArray2)); 

// 5) somma degli elementi dell'array;
function SuperSumAll(array) {

}


console.log(SuperSumAll(testArray3)); 

//______ PER CASA _______________________________________________ 

// 1) clone con tutti valore diviso 3; 
function divide(array, divider) {
    
} 

console.log(divide(testArray1, 3)); 

console.log(divide(testArray1));

// 2) clone con tutti valori < 10;
function filterByMax(array, max) {
    
} 

console.log(filterByMax(testArray1, 10)); 

// 3) array con valori invertiti ( da ultimo a primo);
function reverse(array) {
    
} 

console.log(reverse(testArray1)); 
console.log(reverse(testArray2)); 

// 4) trasformare array multidimensionale in array unico;
function flatArray(array) {
    
} 

console.log(flatArray(testArray3));