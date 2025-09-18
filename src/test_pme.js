import Employee from "./employe.js";
import Pme from "./pme.js";

//Tableau des employés
const employees = [
    new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000)
]
//Créer la PME 
const entreprise = new Pme("Adrar", employees, 300000, 20000, 50000);
entreprise.calculBilan();