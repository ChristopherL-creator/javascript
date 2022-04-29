//  stampare schede studenti; 
const corso1 = {
    nome: 'programmatore front-end',
    ore: 300,
    terminato: false,
}

const corso2 = {
    nome: 'programmatore back-end',
    ore: 300,
    terminato: true,
}


const corso3 = {
    nome: 'programmatore back-end',
    ore: 300,
    terminato: false,
} 

const studente1 = {

    nome: 'Polina',
    cognome: 'Boretc',
    genere: 'femmina',
    eta: 27,
    citta: 'Chelyabinsk',
    sposato: false,
    corso: corso1,

}

const studente2 = { 
    nome: 'Christopher', 
    cognome: 'Limone', 
    genere : 'maschio', 
    eta: 27, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso2
} 

const studente3 = { 
    nome: 'Cinzia', 
    cognome: 'Ariotti', 
    genere : 'femmina', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente4 = { 
    nome: 'Giovanni', 
    cognome: 'Cambiaso', 
    genere : 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente5 = { 
    nome: 'Mattia', 
    cognome: 'Dalla Mutta', 
    genere : 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente6 = { 
    nome: 'Mirco', 
    cognome: 'Faro', 
    genere : 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso2
} 

const studente7 = { 
    nome: 'Paolo', 
    cognome: 'Foppiano', 
    genere : 'maschio', 
    eta: 25, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente8 = { 
    nome: 'Leslie', 
    cognome: 'Fritas Olaechea Stefanny', 
    genere : 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso1
}

const studente9 = { 
    nome: 'Leslie', 
    cognome: 'Fritas Olaechea Stefanny', 
    genere : 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso3
} 


const studente10 = { 
    nome: 'Artem', 
    cognome: 'San Giorgio', 
    genere : 'maschio', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso2
} 

const studente11 = { 
    nome: 'Jessica', 
    cognome: 'Vitanzaq', 
    genere : 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso1
} 

const studenti = [studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10, studente11]
console.log(studenti)

function printStudents(){
for (let i = 0; i < studenti.length; i++) {
    const studente = studenti[i]; 
    console.log('nome: ' + studente.nome); 
    console.log('cognome: ' + studente.cognome);
    console.log('genere: ' + studente.genere);
    console.log('eta: ' + studente.eta); 
    console.log(' ');
    console.log('------');
}
} 

printStudents();

//  stampare solo schede studenti donne; 
function studentiFemmine(studente) {
    for (let i = 0; i < studenti.length; i++) {
        const studente = studenti[i]; 
        if (studente.genere === 'femmina') {
        console.log('nome: ' + studente.nome); 
        console.log('cognome: ' + studente.cognome);
        console.log('genere: ' + studente.genere);
        console.log('eta: ' + studente.eta); 
        console.log(' '); 
        console.log('*******')
        }
    }
} 

studentiFemmine(); 

