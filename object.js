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

console.log(studenti);

console.log(studente1.nome + ' ' + studente1.cognome); 
//  chiamo proprietà scrivendola dopo il punto; 
console.log(studente1.corso.terminato); 
//  posso affinare la ricerca mettendo "." tra oggetti, parametri, etc.;

for (let i = 0; i < studenti.length; i++) {
    const studente = studenti[i];
    console.log(studente.nome + ' ' + studente.cognome);
}
// const automobile1 = { 
//     modello: 'Golf', 
//     produttore: 'Volkswagen', 
//     anno: 2004, 
//     automatica: false
// } 

