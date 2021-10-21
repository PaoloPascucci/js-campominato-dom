/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/
const UserTrial = prompt('Scegli la difficoltà: Facile, Medio o Difficile?')

// let NCell ;

if (UserTrial == "Facile") {
    easy()
}
else if (UserTrial == "Medio") {
    medium()
}
else if (UserTrial == "Difficile") {
    hard()
}
else {
    document.getElementById('container').innerHTML = "Inserire la difficolta, grazie :)"
}


function easy() {
    const cont = document.getElementById('container');
    cont.classList.add("easy");
    for (let i = 1; i <= 100; i++) {
        const Cell = document.createElement("div");
        Cell.classList.add("gridcell");
        Cell.innerHTML += i;
        cont.append(Cell);

        Cell.addEventListener('click', function () {
            this.style.backgroundColor = "skyblue";
            // console.log('cliccato');

            const Bombe = Genbombs(100);
            console.log(Bombe);
        })
    }
}
function medium() {
    const cont = document.getElementById('container');
    cont.classList.add("medium");
    for (let i = 1; i <= 81; i++) {
        const Cell = document.createElement("div");
        Cell.classList.add("gridcell");

        cont.append(Cell);
        Cell.innerHTML += i
        Cell.addEventListener('click', function () {
            this.style.backgroundColor = "skyblue";
            // console.log('cliccato');
            const Bombe = Genbombs(81);
            console.log(Bombe);
        })
    }
}
function hard() {
    const cont = document.getElementById('container');
    cont.classList.add("hard");
    for (let i = 1; i <= 49; i++) {
        const Cell = document.createElement("div");
        Cell.classList.add("gridcell");
        cont.append(Cell);
        Cell.innerHTML += i;
        // const Bombe = Genbombs();
        // console.log(Bombe);
        Cell.addEventListener('click', function () {
            this.style.backgroundColor = "skyblue";
            // console.log('cliccato');

        })
    }
}

/**
 Consegna
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 */
//generate random bombs
function Genbombs() {
    const bombs = [];
    for (i = 0; i < 16; i++) {
        const RandomNumber = Rnumber(1, 100)
        if (!bombs.includes(RandomNumber)) {
            bombs.push(RandomNumber)
        }
    }
    //return bombs
    console.log(bombs);
}


//generate random number
function Rnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// //function is_a_bomb(Bombe) {
//     if (bombs.includes(NCell)) {
//         this.style.backgroundColor = "crimson";
//     } else {
//         this.style.backgroundColor = "skyblue";
//     }
// }


