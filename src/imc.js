export default class IMC
{
    //constructor
    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    //méthodes
    calculImc(){
        //return  Math.round(this.poids / (this.taille ** 2) * 1000 ) / 1000  ;
        return (this.poids / (this.taille ** 2)).toFixed(2);
    }

    display(){
        console.log(`La personne : ${this.nom}, poids : ${this.poids}, taille : ${this.taille}, IMC : ${this.calculImc()} `);
    }
}
