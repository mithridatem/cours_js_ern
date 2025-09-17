//input
const nom_produit = document.querySelector('#nom_produit');
const quantite = document.querySelector('#quantite');
const prix_ht = document.querySelector('#prix_ht');
//Button
const calculer = document.querySelector('#calculer');
//zone de message
const resultat = document.querySelector('#resultat');

//écouteur d'évenement sur le bouton
calculer.addEventListener('click', ()=>{
    
    //tester si les 3 champs sont remplis
    if (nom_produit.value != "" && quantite.value !="" && prix_ht.value != "") {
        
        //tester si prix_ht et quantite sont bien des nombres
        if (!isNaN(prix_ht.value)  && !isNaN(quantite.value)) {
            resultat.textContent = `Le prix TTC est ${Math.round((quantite.value * prix_ht.value)*100) /100} €`;
        } 
        //Sinon ce n'est pas des nombres
        else {
            resultat.textContent = "Attention ce n'est pas des nombres";
        }
    } 
    //Les champs ne sont pas tous remplis
    else {
        resultat.textContent = "Les champs ne sont pas remplis";
    }
})
