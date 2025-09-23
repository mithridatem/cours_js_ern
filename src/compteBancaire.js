export default class CompteBancaire
{
    //Constructeur de la classe CompteBancaire
    constructor(newNom, newSolde = 0) {
        this.nom = newNom;
        this.solde = newSolde;
    }

    //Méthodes
    //Méthode pour créditer le compte courant 
    crediter(montant) {
        //Test si le montant est négatif
        if ( montant < 0) {
            throw new Error("Le montant est négatif");
        }
        this.solde += montant;
    }

    //Méthode pour retirer de l'argent
    retirer(montant) {
        //test si le montant est négatif
        if (montant < 0) {
            throw new Error("Le montant est négatif");
        }
        //Test si le sode est insuffisant
        if (this.solde < montant) {
            throw new Error("Le solde du compte est insuffisant");
        } 
        this.solde -= montant;
        console.log(`Retrait de : ${montant} pour : ${this.nom}`)
    }

    //Méthode pour virer de l'argent entre 2 comptes (this et compte)
    virer(montant, compte) {
        this.retirer(montant);
        console.log(`Virement de : ${montant} de : ${this.nom} vers ${compte.nom}`);
        compte.crediter(montant);
        console.log(`Ajout de : ${montant} pour ${compte.nom}`)
    }

    afficherCompte() {
        console.log(`Titulaire : ${this.nom}, solde : ${this.solde} `);
    }
}