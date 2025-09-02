// Oppgave 1

let navn = prompt('Skriv navnet ditt');
console.log('Hei ' + navn);


// Oppgave 2

let tall = 5;
let tall2 = 7;
let tall3 = 2;

console.log(tall + '+' + tall2 + '=' + (tall + tall2));
console.log(tall2 + '-' + tall3 + '=' + (tall2 - tall3));
console.log(tall3 + '+' + tall + '=' + (tall3 + tall));


//Oppgave 3


let alder = Number(prompt("la oss sjekke om du kan kjøpe øl. hvor gammel er du?"));

if (alder < 18) {
    console.log('Du kan ikke kjøpe øl');
} else {
    console.log('Du kan kjøpe øl');
}


// Oppgave 4

let alder2 = Number(prompt("Hvilen billett skal du ha? hvor gammer er du?"));

if (alder2 < 18) {
    console.log('Du kan kjøpe barnebilett');
} if (alder2 >= 18 && alder2 <= 67) {
    console.log('Du kan kjøpe voksenbilett');
} if (alder2 > 67){
    console.log('Du må kjøpe honnørbillett');
}