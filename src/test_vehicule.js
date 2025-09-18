import Vehicule from "./vehicule.js";

//instance de Vehicule
const voiture = new Vehicule("Mercedes CLK", 4, 250);
const moto = new Vehicule("Honda CBR", 2, 280);
const camion = new Vehicule("Poids lourd", 6 , 130);

//Affichage du type de véhicule
console.log("Le vehicule est de type : " + voiture.detect());
console.log("Le vehicule est de type : " + moto.detect());
console.log("Le vehicule est de type : " + camion.detect());

//Appel de la méthode boost
voiture.boost();
console.log("La nouvelle vitesse est de : " + voiture.vitesse + " km/h");

console.log(voiture.plusRapide(moto));
console.log(moto.plusRapide(voiture));
console.log(moto.plusRapide(camion));

