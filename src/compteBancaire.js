export default class CompteBancaire {

    /**
     * Constructeur de la classe CompteBancaire
     * @param {string} nom 
     * @param {float} solde default 0 
     */
    constructor(nom, solde = 0) {
        this.nom = nom;
        this.solde = solde;
    }

    //Méthodes de la classe

    /**
     * Méthode pour créditer d'un montant le compte
     * @param {float} montant
     * @return void
     * @throws Error  
     */
    credit(montant) {
        if (montant < 0) {
            throw new Error(`Le montant ${montant} est négatif`);
        }
        if (isNaN(montant)) {
            throw new Error(`Le montant : ${montant} n'est pas un nombre`);
        }
        this.solde += montant;
    }

    /**
     * Méthode pour retirer un montant du compte
     * @param {float} montant
     * @return void
     * @throws Error
     */
    retrait(montant) {
        if (this.solde < montant) {
            throw new Error(`Retrait impossible : Le solde du compte : ${this.nom} est inférieur à : ${montant}`);
        }
        if (montant < 0) {
            throw new Error(`Le montant ${montant} est négatif`);
        }
        if (isNaN(montant)) {
            throw new Error(`Le montant : ${montant} n'est pas un nombre`);
        }
        this.solde -= montant;
    }

    /**
     * Méthode pour virer de l'argent du compte courant (this) à un autre compte (compte)
     * @param {float} montant 
     * @param {CompteBancaire} compte
     * @return void
     * @throws Error  
     */
    virement(montant, compte) {
        this.retrait(montant);
        compte.credit(montant);
    }

    /**
     * Méthode pour afficher le solde du compte avec ces informations
     * @return string 
     */
    afficherCompte() {
        return `Titulaire : ${this.nom}, solde : ${this.solde}`;
    }
}
