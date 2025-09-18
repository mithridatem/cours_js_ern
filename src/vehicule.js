export default class Vehicule {

    //constructeur
    constructor(nomVehicule, nbrRoue, vitesse) {
        this.nomVehicule = nomVehicule;
        this.nbrRoue = nbrRoue;
        this.vitesse = vitesse;
    }

    //methodes
    detect() {
        //Test du nombre de roue
        if (this.nbrRoue == 4) {
            return "Voiture";
        }
        if (this.nbrRoue == 2) {
            return "Moto";
        }
        return "Autre véhicule";
    }

    boost() {
        this.vitesse += 50;
    }

    plusRapide(vehicule) {
        if (this.vitesse > vehicule.vitesse) {
            return `Le vehicule :  ${this.nomVehicule} est le plus rapide`;
        }
        if (this.vitesse < vehicule.vitesse) {
            return `Le vehicule :  ${vehicule.nomVehicule} est le plus rapide`;
        }
        return "Les 2 vehicules vont à la même vitesse";
    }
}
