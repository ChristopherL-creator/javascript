// esercizio 1

// ciclo for che parta da 0 fino a 100
// ad ogni giro stampare il valore di i
//e stampare FIZZ se i divisibile per 3, BUZZ se divisibile per 5, FIZZBUZZ se divisibile per 3 e per 5

for (let i = 0; i < 101; i++) {
  const isDivisibilePerCinque = i % 5 === 0;
  const isDivisibilePerThree = i % 3 === 0;

if (isDivisibilePerThree && isDivisibilePerCinque) {
        console.log(i + ', ' + "FIZZBUZZ")
    } else if (isDivisibilePerCinque){
        console.log(i + ', ' + "BUZZ");
    } else if (isDivisibilePerThree){
        console.log(i + ', ' + "FIZZ")
    } 
else {
      console.log(i); 
} 
}

// esercizio 2

// creare programma che stampi a console questa configurazione:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # # 

console.log("# # # #\n # # # # \n# # # #\n # # # #\n# # # #"); 

console.log( //backtick, consente stringhe interpolate: console.log(`il docente ${costante} ha ${cotante} anni);
  `   # # # #
    # # # #
   # # # #
    # # # #
   # # # #
    # # # #
   # # # #` );

// esercizio 3

// creare programma che stampi a console questa configurazione:
// #
// ##
// ###
// ####
// #####
// ###### 

console.log(" #\n ##\n ###\n ####\n #####\n ######\n");

// esercizio 4

// creare programma che stampi a console questa configurazione:

//     #
//    ###
//   #####
//  #######
// #########

console.log("     #\n    ###\n   #####\n  #######\n #########\n");
