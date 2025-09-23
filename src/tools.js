//Fonctions utilitaires
/**
 * Méthode qui vérifie si un compte bancaire existe
 * @param {Array<CompteBancaire>} tabComptes 
 * @param {String} nom 
 * @returns {boolean} true si existe false existe pas
 */
export function isCompteBancaireExist(tabComptes, nom) {
    for (const compte of tabComptes) {
        if (compte.nom == nom) {
            return true;
        }
    }
    return false;
}

/**
 * Méthode qui retourne le compte bancaire (CompteBancaire) par son nom
 * @param {array<CompteBancaire>} tab 
 * @param {string} value 
 * @returns {CompteBancaire | undefined}
 */
export function trouverCompteParNom(tab, value) {
    return tab.find(objet => objet.nom === value);
}

/**
 * Méthode pour reset la zone de message
 * @returns void
 */
export function resetMessage() {
    setTimeout(() => {
        message.textContent = "";
    }, 3000)
}
