// esercizio 1

// ciclo for che parta da 0 fino a 100
// ad ogni giro stampare il valore di i
//e stampare FIZZ se i divisibile per 3, BUZZ se divisibile per 5, FIZZBUZZ se divisibile per 3 e per 5

// for (let i = 0; i < 101; i++) {
//   const isDivisibilePerCinque = i % 5 === 0;
//   const isDivisibilePerThree = i % 3 === 0;

//   let result = "";

// if (isDivisibilePerThree && isDivisibilePerCinque) {
//         result = result + 'FIZZBUZZ'; 
//         console.log(i + ',' + result)
//     } else if (isDivisibilePerCinque){
//         result += "BUZZ"; 
//         console.log(i + ',' + result);
//     } else if (isDivisibilePerThree){
//         result += "FIZZ"; 
//         console.log(i + ',' + result)
//     } 
// else {
//       console.log(i); 
// } 
// }

// esercizio 2

// creare programma che stampi a console questa configurazione:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # # 

for (let riga = 1; riga <8; riga++); {
    // console.log("sto leggendo la riga: " + riga) 
    for (let colonna = 1; colonna < 5; colonna++); {
        // console.log("sto leggendo la colonna:" + colonna); 
        console.log('sto leggendo la cella: ' + riga + ', ' + colonna);
    }
} 

// esercizio 3

// creare programma che stampi a console questa configurazione:
// #
// ##
// ###
// ####
// #####
// ######

// esercizio 4

// creare programma che stampi a console questa configurazione:

//     #
//    ###
//   #####
//  #######
// #########
