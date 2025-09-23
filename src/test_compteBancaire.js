import CompteBancaire from "./compteBancaire.js";

//Récupération des élèments du DOM
const nomCompte = document.querySelector('#id_nom');
const btCreate = document.querySelector('#id_create');

const compteOperation = document.querySelector('#id_compte');
const montantOperation = document.querySelector('#id_montant');
const btCrediter = document.querySelector('#id_crediter');
const btRetirer = document.querySelector('#id_retirer');

const compteSource = document.querySelector('#id_source');
const compteCible = document.querySelector('#id_cible');
const montantVirement = document.querySelector('#id_montant_virement');
const btVirement = document.querySelector('#id_virement');

const message = document.querySelector('#id_message');

//Tableau de comptes bancaires
const comptes = [];

//1 Créer un compte (
//écouteur événement sur le bouton créer un compte
btCreate.addEventListener('click', () => {
    //test si le champs id_nom est remplis
    if (nomCompte.value === "") {
        message.textContent = `Le champ nom est vide veuillez le remplir`;
    } else {

        if (compteBancaireExist(comptes, nomCompte.value)) {
            message.textContent = `Le compte existe déja`;
        } else {
            message.textContent = `Le compte ${nomCompte.value} a été ajouté`;
            comptes.push(new CompteBancaire(nomCompte.value));
            console.log(comptes);
        }
    }
    //vider les champs du formulaire
    nomCompte.value = "";
});

//2 Opérations d'un compte bancaire

//2.1 créditer le compte

//écouteur d'événement sur le bouton créditer
btCrediter.addEventListener('click', () => {
    try {
        //test si les 2 champs sont remplis
        if (compteOperation.value === "" || montantOperation.value === "") {
            throw new Error(`Veuillez renseigner les 2 champs nom et montant`);
        }
        //test si le montant n'est pas un nombre
        if (isNaN(montantOperation.value)) {
            throw new Error(`Le montant à créditer : ${montantOperation.value} n'est pas un nombre`);
        }
        //Test si le compte n'existe pas
        if (!compteBancaireExist(comptes, compteOperation.value)) {
            throw new Error(`Le compte ${compteOperation.value} n'existe pas`);
        }
        //créditer le compte
        for (const compte of comptes) {
            if (compte.nom == compteOperation.value) {
                compte.credit(parseFloat(montantOperation.value));
                message.textContent = `Le compte : ${compteOperation.value} à été crédité de : ${montantOperation.value} €`;
            }
        }
    } catch (error) {
        message.textContent = error.message;
    }
    //Vider les inputs de formulaire
    montantOperation.value = "";
    compteOperation.value = "";
});

//2.2 retirer du compte

//écouteur d'événement sur le bouton retirer
btRetirer.addEventListener('click', () => {
    try {
        //test si les 2 champs sont remplis
        if (compteOperation.value === "" || montantOperation.value === "") {
            throw new Error(`Veuillez renseigner les 2 champs nom et montant`);
        }
        //test si le montant n'est pas un nombre
        if (isNaN(montantOperation.value)) {
            throw new Error(`Le montant à retirer : ${montantOperation.value} n'est pas un nombre`);
        }
        //Test si le compte n'existe pas
        if (!compteBancaireExist(comptes, compteOperation.value)) {
            throw new Error(`Le compte ${compteOperation.value} n'existe pas`);
        }
        //créditer le compte
        for (const compte of comptes) {
            if (compte.nom == compteOperation.value) {
                compte.retrait(parseFloat(montantOperation.value));
                message.textContent = `Le compte : ${compteOperation.value} à été retirer de : ${montantOperation.value} €`;
            }
        }
    } catch (error) {
        message.textContent = error.message;
    }
    //Vider les inputs de formulaire
    montantOperation.value = "";
    compteOperation.value = "";
});

//3 virement entre compte bancaire

//écouteur sur le bouton virement
btVirement.addEventListener('click', () => {
    try {
        //test si les champs ne sont remplis
        if (compteSource.value === "" || compteCible.value === "" || montantVirement.value === "") {
            throw new Error(`Veuillez renseigner les 3 champs compte cible, compte source et montant du virement`);
        }
        //test si me montant n'est pas un nombre
        if (isNaN(montantVirement.value)) {
            throw new Error(`Le montant à retirer : ${montantVirement.value} n'est pas un nombre`);
        }
        //test si le compte source n'existe pas
        if (!compteBancaireExist(comptes, compteSource.value)) {
            throw new Error(`Le compte ${compteSource.value} n'existe pas`);
        }
        //test si me compte cible n'existe pas
        if (!compteBancaireExist(comptes, compteCible.value)) {
            throw new Error(`Le compte ${compteCible.value} n'existe pas`);
        }
        //virement
        const source = indexCompte(comptes, compteSource.value);
        const cible = indexCompte(comptes, compteCible.value);
        comptes[source].virement(parseFloat(montantVirement.value), comptes[cible]);
        message.textContent = `Le compte : ${comptes[source].nom} a viré la somme de : ${montantVirement.value} à ${comptes[cible].nom}`;
    } catch (error) {
        message.textContent = error.message;
    }
    //Vider les inputs de formulaire
    compteSource.value = "";
    compteCible.value = "";
    montantVirement.value = "";
});

//Fonctions utilitaires
/**
 * Méthode qui vérifie si un compte bancaire existe
 * @param {Array<CompteBancaire>} tabComptes 
 * @param {String} nom 
 * @return boolean true si existe false existe pas
 */
function compteBancaireExist(tabComptes, nom) {
    for (const compte of tabComptes) {
        if (compte.nom == nom) {
            return true;
        }
    }
    return false;
}

/**
 * Méthode qui récupére l'index d'un compte
 * @param {Array<CompteBancaire>} tabComptes 
 * @param {String} nom 
 * @return int index du compte
 */
function indexCompte(tabComptes, nom) {
    for (let i = 0; i < tabComptes.length; i++) {
        if (tabComptes[i].nom === nom) {
            return i;
        }
    }
}