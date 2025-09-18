export default class Employee{

    //constructeur
    constructor(nom, prenom, age, salaireMensuel){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
        this.cout = this.calculCout();
    }

    //Calcul bilan
    calculCout(){ 
        //constante Nb de mois 
        const NB_MOIS = 12;
        const TAXE = 0.90;

        return this.salaireMensuel * NB_MOIS * (1 + TAXE);
    }
}
