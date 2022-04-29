const corso1 = { 
    nome: 'programmatore front-end', 
    ore: 300, 
    terminato: false
} 

const voti1 = [8, 5, 10, 9];

const studente1 = { 
    nome: 'Mirco', 
    cognome:'stringa', 
    età: 28, 
    sposato: false, 
    genere: 'm', 
    corso: { 
        nome:'programmtore mobile', 
        ore: 250, 
        terminato: true
    }, 
    voti: [9, 8, 7, 6]
//  "proprietà: valore"
} 

const voti2 = [4, 6, 10, 9];

const studente2 = { 
    nome: 'Paolo', 
    cognome:'stringa2', 
    età: 24, 
    sposato: false, 
    corso: corso1, 
    voti: voti2 
} 

const studenti = [studente1, studente2]; 

// console.log(studenti);

// console.log(studente1.nome + ' ' + studente1.cognome); 
// //  chiamo proprietà scrivendola dopo il punto; 
// console.log(studente1.corso.terminato); 
// //  posso affinare la ricerca mettendo "." tra oggetti, parametri, etc.;

// for (let i = 0; i < studenti.length; i++) {
//     const studente = studenti[i];
//     console.log(studente.nome + ' ' + studente.cognome);
// } 

//  lambda: 
function reduceOldest(previous, current){ 
    if (previous.età < current.età) {
        return current;
    } else { 
        return previous;
    }
} 

//  Se da un ciclo for si produce un  risultato, che è un array con lo 
//  stesso numero di elementi dell'originale, ma tutti diversi, è un map; 

//  Se da un ciclo for si produce un sottinsieme dell'originale, con 
//alcuni elementi cambiati, può essere un filter;

//  ho creato funzione che riassume i "console.log":
function printSingleStudent(studente){ 
    console.log('nome: ' + studente.nome); 
    console.log('cognome: ' + studente.cognome);
    console.log('genere: ' + studente.genere);
    console.log('eta: ' + studente.età); 
    console.log(' ');
    console.log('------');
}

function printOldestStudent(studentArray) {
    
    let oldest = studentArray[0]; 

    // for (let i = 1; i < studentArray.length; i++) {
    //     const student = studentArray[i]; 
    //     if (studenti.età > oldest.età) {
    //         oldest = student;
    //     }
    // } 

//  con reduce: 
    studentArray.reduce((p, c) => p.età > c.età ? c : p);

//  richiamo funzione creata prima, con variabile oldest:
    printSingleStudent(oldest);

    // console.log('nome: ' + oldest.nome); 
    // console.log('cognome: ' + oldest.cognome);
    // console.log('genere: ' + oldest.genere);
    // console.log('eta: ' + oldest.età); 
}

printOldestStudent(studenti); 

//  ________________________________________________________________________

studenti.sort(compareStudentsByAgeAndCognome);
// printStudents(studenti); 


function compareStudentsByCognome(student1, student2) {
    student1.cognome.localeCompare(student2.cognome);
} 

function printStudents(studentArray){
    for (let i = 0; i < studentArray.length; i++) {
        const studente = studentArray[i]; 
        console.log('nome: ' + studente.nome); 
        console.log('cognome: ' + studente.cognome);
        console.log('genere: ' + studente.genere);
        console.log('eta: ' + studente.età); 
        console.log(' ');
        console.log('------');
    }
} 

function compareStudentsByAge(student1, student2) { 
    return student1.età - student2.età;
} 

function compareStudentsByAgeAndCognome(student1, student2) {
    const ordine = student1.età - student2.età; 
    if (ordine === 0) {
        return student1.cognome.localeCompare(student2.cognome);
    } else { 
        return ordine;
    }
} 
studenti.sort(compareStudentsByAge);

console.log('age', studenti);
