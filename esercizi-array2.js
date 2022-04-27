const testArray4 = [2, 4, 7, -9, 1000, 45, 2, 12, 333, -1000, 123, 34]; 

const testArray5 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu']; 

const testArray6 = [true, 'pippo', 204, 'verde', 3000, 100, false];



//filtrare testArray4 in modo che rimangano solo numeri 
// positivi;

function filteringPositives(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const positive = element > 0; 
        if (positive) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(filteringPositives(testArray4));

console.log(testArray4.filter((number)=>number>0));

// filtrare testArray4 in modo che rimangano solo numeri 
// divisibili per 3;
function filteringPositives(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const isDivisibilePer3 = element % 3 === 0; 
        if (isDivisibilePer3) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(filteringPositives(testArray4));

console.log(testArray4.filter((number)=>number%3===0));


// filtrare testArray4 in modo che rimangano solo numeri 
// divisibili per 3 e 4;
function filteringPositives(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const isDivisibilePer3 = element % 3 === 0;
        const isDivisibilePer4 = element % 4 === 0;
        if (isDivisibilePer3) {
            newArray.push(element); 
        } else if (isDivisibilePer4) {
            newArray.push(element)
        }
    } 
    return newArray;
} 
console.log(filteringPositives(testArray4));

console.log(testArray4.filter((number)=>number%3===0||number%4===0));

// filtrare testArray5 in modo che rimangano solo le 
// stringhe più corte di 6 lettere; 
function moreThan6Chars(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const shorterThan6 = element.length < 6; 
        if (shorterThan6) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(moreThan6Chars(testArray5));

console.log(testArray5.filter((stringa) => stringa.length < 6));

// filtrare testArray5 in modo che rimangano solo le 
// stringhe che contengono la lettera 'n'; 
function containsOnlyN(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const containsN = element.includes ("n"); 
        if (containsN) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(containsOnlyN(testArray5));

console.log(testArray5.filter((stringa) => stringa.includes ("n")));

// filtrare testArray6 in modo che rimangano solo i numeri; 
function onlyNumbers(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const elementTypeNumber = typeof element === 'number'; 
        if (elementTypeNumber) {
            newArray.push(element); 

        }
    } 
    return newArray;
} 
console.log(onlyNumbers(testArray6));

console.log(testArray6.filter((element) => typeof element === 'number'));

// mappare testArray4 dividendo tutti i numeri per 3;
function mapDiv3(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const elementPer3 = element/3; 
        newArray.push(elementPer3); 

        }
    return newArray;
} 
console.log(mapDiv3(testArray4));

console.log(testArray4.map((number) => number / 3));


// mappare testArray4 facendo la radice quadrata di tutti i 
// numeri;
function mapDiv3(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        const elementSquare = Math.sqrt(element); 
        newArray.push(elementSquare); 

        }
    return newArray;
} 
console.log(mapDiv3(testArray4));

console.log(testArray4.map((number) => Math.sqrt(number)));


// mappare testArray4 sommando 1 solo ai numeri dispari; 
function mapOddPlus1(array) {
    
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        if (element % 2 !== 0) {
            const oddPlus1 = element + 1; 
            newArray.push(oddPlus1); 
        } else { 
         newArray.push(element);
        }

        }
    return newArray;
} 
console.log(mapOddPlus1(testArray4));

console.log(testArray4.map((element) => element % 2 !== 0) );

// mappare testArray5 rendendo maiuscole la prima e l'ultima 
// lettera di ogni parola; 
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

console.log(FirstUpperCase(testArray5)); 

// mappare testArray5 aggiungendo in fondo ad ogni stringa la 
// lunghezza della stessa;