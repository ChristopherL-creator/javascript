// STRINGHE
console.log('hello world'); 

// alert("hello world"); 

console.log("hello cinzia"); 

console.log('7');  

console.log("andrea" + "è" + "in" + "ritardo", "attacca tutti gli elementi");

// NUMBER  
console.log(7); 

console.log('somma', 10+5); 

console.log('sottrazione', 10-5); 

console.log('moltiplicazione', 10*5); 

console.log('divisione', 10/5); 

console.log("potenza", 5 ** 2); 

console.log("modulo", 5 % 2, "da' il resto della divisione"); 

console.log("Math", Math.round(3.56), "round arrotonda"); 

// complicazioni 
console.log("ciao" + 7, "somma stringhe e numeri a prescindere"); 

console.log("7" + 7); 

// boolean 
console.log(true); 

console.log(false); 

// tavola verità del NOT
console.log("not true", !true); 

console.log("not false", !false); 

// tavola verità dell'AND
console.log("true and true", true && true); 

console.log("true and false", true && false);

console.log("false and false", false && false); 

// tavola verità dell'OR
console.log("true or true", true || true); 

console.log("true or false", true || false);

console.log("false or false", false || false); 

// operatore di uguaglianza 
console.log("true === true", true === true, "true è uguale a true");

console.log("false === false", false === false); 

console.log("true === false", true === false, "true non è uguale a false");

console.log("'pippo' === 'pippo'", 'pippo' === 'pippo'); 

console.log("'pippo' === 'pluto'", "pippo" === "pluto"); 

console.log("7 === 7", 7 === 7); 

console.log("7 === 12", 7 === 12); 

// operatore di diverstià 
const brontolone = 5; 
const puffetta = 9; 

const SonoDiversi = !(brontolone === puffetta); 
const SonoDiversi2 = brontolone !== puffetta; 

// operatori di maggiore e minore 
const minore = brontolone < puffetta; 
const maggiore = brontolone > puffetta; 

const minoreOUguale = brontolone <= puffetta; 
const maggioreOUguale = brontolone >= puffetta;

// undefined 
let grandePuffo; 

console.log('log di grandePuffo', grandePuffo) 

// null 
let quattrocchi = null; 

console.log('log di quattrocchi', quattrocchi); 

// NaN - Not a Number 
let numeroSbagliato = "cinque"; 

let numero2 = parseInt(numeroSbagliato); 

console.log("numero sbagliato", numero2); 

// infinity 
const infinitoPositivo = +Infinity; 

const infinitoNegativo = -Infinity; 




// complicazioni 
console.log("'7' === 7", '7' === 7, "stringa diversa da numero"); 

console.log("'7' == 7", '7' == 7, "vede che hanno tutti e due 7"); 

// variabili let possono essere ridefinite
let pippo = 7; 

console.log(pippo); 

console.log(pippo + 3); 

let pluto = 5; 

console.log(pippo + pluto); 

let paperino = "ciao"; 

console.log(paperino); 

console.log(paperino + pluto); 

pluto = "mondo"; 

console.log(paperino + pluto); 

var paperoga = 12; 

var paperone = 15; 

console.log(paperoga + paperino); 

console.log(paperone + paperoga); 

// const non possono essere ridefinite, viene usato di default
const topolino = "viva"; 

const topolina = "javascript"; 

console.log(topolino + topolina); 

// errore di riassegnazione
// topolina = "mondo"; 

// prompt("ciao");

const stringa1 = prompt("inserisci la prima stringa");

const stringa2 = prompt("inserisci seconda stringa"); 

// console.log(stringa1 + stringa2); 

alert(stringa1 + stringa2); 

// camel case 
let laMiaVariabileDiEsempio;

const LA_MIA_IMPORTANTISSIMA_COSTANTE = 3.14;



