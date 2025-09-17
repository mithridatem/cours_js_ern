class Habitation {
   //Constructeur
   constructor(nom_maison, largeur_maison, longueur_maison) {
      this.nom = nom_maison;
      this.largeur = largeur_maison;
      this.longueur =longueur_maison;
   }
   //Méthode
   superficie() {
      return this.largeur * this.longueur;
   }
}

const villa = new Habitation("villa", 15, 8);
const maison = new Habitation("maison", 20, 12);

console.log(villa.superficie());
console.log(maison.superficie());