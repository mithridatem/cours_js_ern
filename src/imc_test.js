import IMC from './imc.js';

//Liste de personne
const list = [
    new IMC("Sebastien Chabal", 135, 1.7),
    new IMC("Escaladeuse",45, 1.68),
    new IMC("JoJo", 300, 2),
    new IMC("Gondrand", 90, 1.75),
    new IMC("Colonel", 200, 1.75),
    new IMC("Josiane", 99, 1.55)
];
//iteration de la liste 
//boucle for
for (let i = 0; i < list.length; i++) {
    list[i].display();
}

//for of
for (const userImc of list) {
    userImc.display();
}

//avec foreach
list.forEach(imc => imc.display());

