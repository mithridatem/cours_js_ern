class Habitation {
   //Constructeur
   constructor(nom_maison, largeur_maison, longueur_maison, nbrEtage_maison) {
      this.nom = nom_maison;
      this.largeur = largeur_maison;
      this.longueur =longueur_maison;
      this.nbrEtage = nbrEtage_maison;
   }
   //Méthode
   superficie() {
      return this.largeur * this.longueur * this.nbrEtage;
   }
}

const villa = new Habitation("villa", 15, 8, 1);
const maison = new Habitation("maison", 20, 12, 3);

console.log("L'habitation  :  " + villa.nom + " à une superficie de  : " + villa.superficie() + " m2");
console.log("L'habitation  :  " + maison.nom + " à une superficie de  : " + maison.superficie() + " m2");
