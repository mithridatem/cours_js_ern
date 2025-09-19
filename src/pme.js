export default class Pme
{   //constructeur
    constructor(nom, equipe, ventes, fraisFixe, achats) {
        this.nom = nom;
        this.equipe = equipe;
        this.ventes = ventes;
        this.fraisFixe = fraisFixe;
        this.achats = achats;
        this.bilan = 0;
    }

    //
    calculBilan(){
        //montant des salaires

        let coutsSalaires = 0;
        
        for (const salarie of this.equipe) {
            coutsSalaires += salarie.cout;
        }

        console.log(this.nom + " Cout Initial : " + (this.fraisFixe + this.achats));
        console.log(this.nom + " Cout Equipe : " + (coutsSalaires));
        console.log(this.nom + " Ventes : " + this.ventes);
        const bilan = this.ventes - (coutsSalaires + this.fraisFixe + this.achats);
this.bilan = bilan;
        console.log(this.nom + " Bilan : " + bilan);
    }
}