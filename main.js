const nbr = 19;

let name = prompt('Inserisci qui il tuo nome');

let surname = prompt('Inserisci qui il tuo cognome');

let fvColor = prompt ('Quale è il tuo colore preferito?');

let pwd = name + surname + fvColor + nbr;

document.getElementById('pwd').innerHTML = "La tua password è: " + pwd;