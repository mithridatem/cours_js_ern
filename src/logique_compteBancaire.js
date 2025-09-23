import CompteBancaire from "./compteBancaire.js";
import { isCompteBancaireExist, trouverCompteParNom, resetMessage, clearInput } from './tools.js';

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
    try {
        //test si le champs id_nom est remplis
        if (nomCompte.value === "") {
            throw new Error(`Le champ nom est vide veuillez le remplir`);
        }
        //test si le compte existe déja
        if (isCompteBancaireExist(comptes, nomCompte.value)) {
            throw new Error(`Le compte ${nomCompte.value} existe déja`);
        }
        //Ajout du compte bancaire au tableau (comptes)
        comptes.push(new CompteBancaire(nomCompte.value));
        //Afficher le message
        message.innerText = `Le compte ${nomCompte.value} a été ajouté`;
        message.classList.remove("error");
        message.classList.add("valid");
    } catch (error) {
        message.innerText = error.message;
        message.classList.remove("valid");
        message.classList.add("error");
    }
    //vider les champs du formulaire
    clearInput();
    //vider la zone de message
    resetMessage(message);
});

//2 Opérations sur compte bancaire (credit et retrait) du tableau (comptes)

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
        if (!isCompteBancaireExist(comptes, compteOperation.value)) {
            throw new Error(`Le compte ${compteOperation.value} n'existe pas`);
        }
        //Opération credit du montant du compte
        //Récupérer le compte bancaire
        const compte = trouverCompteParNom(comptes, compteOperation.value);
        //Opération de credit du montant
        compte.credit(parseFloat(montantOperation.value));
        //Message de confirmation
        message.innerText = `Le compte : ${compteOperation.value} à été retirer de : ${montantOperation.value} €, 
        ${compte.afficherCompte()}`;
        message.classList.remove("error");
        message.classList.add("valid");
    } catch (error) {
        message.innerText = error.message;
        message.classList.remove("valid");
        message.classList.add("error");
    }
    //vider les champs du formulaire
    clearInput();
    //vider la zone de message
    resetMessage(message);
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
        if (!isCompteBancaireExist(comptes, compteOperation.value)) {
            throw new Error(`Le compte ${compteOperation.value} n'existe pas`);
        }
        //Opération retrait du montant du compte
        //Récupérer le compte bancaire
        const compte = trouverCompteParNom(comptes, compteOperation.value);
        //Opération de retrait du montant
        compte.retrait(parseFloat(montantOperation.value));
        //Message de confirmation
        message.innerText = `Le compte : ${compteOperation.value} à été retirer de : ${montantOperation.value} €, 
        ${compte.afficherCompte()}`;
        message.classList.remove("error");
        message.classList.add("valid");
    } catch (error) {
        message.innerText = error.message;
        message.classList.remove("valid");
        message.classList.add("error");
    }
    //vider les champs du formulaire
    clearInput();
    //vider la zone de message
    resetMessage(message);
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
        if (!isCompteBancaireExist(comptes, compteSource.value)) {
            throw new Error(`Le compte ${compteSource.value} n'existe pas`);
        }
        //test si me compte cible n'existe pas
        if (!isCompteBancaireExist(comptes, compteCible.value)) {
            throw new Error(`Le compte ${compteCible.value} n'existe pas`);
        }
        //Opération de virement entre compte bancaire
        //Compte source
        const source = trouverCompteParNom(comptes, compteSource.value);
        //Compte cible
        const cible = trouverCompteParNom(comptes, compteCible.value);
        //opération de virement
        source.virement(parseFloat(montantVirement.value),cible);
        //Message de confirmation
        message.innerText = `Le compte : ${source.nom} a viré la somme de : ${montantVirement.value} à ${cible.nom}. 
        ${source.afficherCompte()},  
        ${cible.afficherCompte()}
        `;
        message.classList.remove("error");
        message.classList.add("valid");
    } catch (error) {
        message.innerText = error.message;
        message.classList.remove("valid");
        message.classList.add("error");
    }
    //vider les champs du formulaire
    clearInput();
    //vider la zone de message
    resetMessage(message);
});
