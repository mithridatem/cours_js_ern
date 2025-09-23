import CompteBancaire from "./compteBancaire.js";

//Créer les comptes (tableau CompteBancaire)
const comptes = [
    new CompteBancaire("Alex"),
    new CompteBancaire("Clovis"),
    new CompteBancaire("Marco")
];

//Assigner 1000 € à chaque compte
for (const compte of comptes) {
    compte.crediter(1000);
    console.log(`Ajout de : 1000 à : ${compte.nom}`);
}

//Retirer 100 € à Alex
try {
    comptes[0].retirer(100);
} catch (error) {
    console.log(error.message);
}

//Virement de Marco 300 € à Clovis
try {
    comptes[2].virer(300, comptes[1]);
} catch(error ) {
    console.log(error.message);
}

//retrait de 1200 € d'Alex

try {
    comptes[0].retirer(1200);
} catch(error) {
    console.log(error.message);
}

//Afficher le soldes des comptes
for (const compte of comptes) {
    compte.afficherCompte();
}