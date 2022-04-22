// // esercizio 1

// // ciclo for che parta da 0 fino a 100
// // ad ogni giro stampare il valore di i
// //e stampare FIZZ se i divisibile per 3, BUZZ se divisibile per 5, FIZZBUZZ se divisibile per 3 e per 5

// for (let i = 0; i < 101; i++) {
//   const isDivisibilePerCinque = i % 5 === 0;
//   const isDivisibilePerThree = i % 3 === 0;

// if (isDivisibilePerThree && isDivisibilePerCinque) {
//         console.log(i + ', ' + "FIZZBUZZ")
//     } else if (isDivisibilePerCinque){
//         console.log(i + ', ' + "BUZZ");
//     } else if (isDivisibilePerThree){
//         console.log(i + ', ' + "FIZZ")
//     } 
// else {
//       console.log(i); 
// } 
// }

// // esercizio 2

// // creare programma che stampi a console questa configurazione:
// // # # # #
// //  # # # #
// // # # # #
// //  # # # #
// // # # # #
// //  # # # #
// // # # # # 

// console.log("# # # #\n # # # # \n# # # #\n # # # #\n# # # #"); 

// //________________________________________________________________________

// console.log( //backtick, consente stringhe interpolate: console.log(`il docente ${costante} ha ${cotante} anni);
//   `   # # # #
//     # # # #
//    # # # #
//     # # # #
//    # # # #
//     # # # #
//    # # # #` ); 

//    //______________________________________________________________________

// for (let i = 0; i < 8; i++) { 
//     if (i % 2 === 0) {
//         console.log("# # # #");
//     } else{ 
//         console.log(" # # # #");
//     }
// } 

// //_________________________________________________________________________

// const costante1 = hahaha; 
// const costante  = hehehe;

// console.log(`il docente ${costante1} ha ${costante} anni`); 

//_________________________________________________________________________ 

for (let r = 0; r < 8; r++) {
    let stringaDiRiga = ""; 

    for (let c = 0; c < 8; c++){ 
        
        const isRigaPari = r % 2 === 0; 
        const isColonnaPari = c % 2 === 0;
        
        if (isRigaPari && isColonnaPari) {
            stringaDiRiga = stringaDiRiga + "#";
        } else if (!isRigaPari && !isColonnaPari){
            stringaDiRiga = stringaDiRiga + "#"; 
        } else { 
            stringaDiRiga = stringaDiRiga + " ";
        }
    } 

    console.log(stringaDiRiga);
} 

//_________________________________________________________________________ 

for (let r = 0; r < 8; r++) {
    let stringaDiRiga = ""; 

    for (let c = 0; c < 8; c++){ 

        const sommaDiRigaEColonna = r + c; 
        const isSommaPari = sommaDiRigaEColonna % 2 === 0;

        if (isSommaPari) { 
            stringaDiRiga = stringaDiRiga + '#';
        } else { 
            stringaDiRiga = stringaDiRiga + " ";
        }
    } 

    console.log(stringaDiRiga);
} 

// esercizio 3

// creare programma che stampi a console questa configurazione:
// #
// ##
// ###
// ####
// #####
// ###### 

// console.log(" #\n ##\n ###\n ####\n #####\n ######\n");

// // esercizio 4

// // creare programma che stampi a console questa configurazione:

// //     #
// //    ###
// //   #####
// //  #######
// // #########

// console.log("     #\n    ###\n   #####\n  #######\n #########\n");