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

function elaboraDato(dato) {
    
    const datoArrotondato = Math.round(dato); 
    
    const datoArrotondatoAllaSeconda = datoArrotondato ** 2;  
    
    let datoDopoSoglia; 

    if (datoArrotondatoAllaSeconda > 10) {
        datoDopoSoglia = 10;
    } else {
        datoDopoSoglia = datoArrotondatoAllaSeconda;
    } 

    if (datoDopoSoglia > 5) {
        return 0;
    } else {
        return 1;
    }
} 

const dato1 = 3.4; 

const risultato = elaboraDato(dato1) 

console.log(risultato); 

const dato2 = 2; 

const risultato2 = elaboraDato(dato2) 

console.log(risultato2); 

const dato3 = 27; 

const risultato3 = elaboraDato(dato3) 

console.log(risultato3); 

function controllaSoglia(numero) {
    if (numero > 10) {
        return 10;
    } else {
        return numero;
    }
}