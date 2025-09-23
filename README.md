mathieu
**Exercice ex_07** : 
Adapter l'exercice **ex_06** en utilisant le DOM :
**La page HTML** va contenir les éléments suivants :
- un input de type text (nom du compte) (id_nom),
- un bouton qui va créer le compte (id bt_create),
- un input de type txt (id_compte),
- un input de type txt (id_montant),
- un bouton (id_crediter),
- un bouton (id_retirer),
- un paragraphe (id_message)
**partie** ( credit et debit) :
- un input de type text (id_cible) compte qui va recevoir le virement 
- un input de type text (id_source) compte qui va envoyer le virement,
- un input de type text (id_montant_virement) montant du virement
- un bouton (id_virement).
**Partie JS** :
- écouteur click sur le bouton id_create (qui va ajouter un compte au tableau de comptes),
- écouteur click sur le bouton id_crediter (qui va créditer le compte du montant saisie dans  id_montant du compte sélectionné dans id_compte),
- ecouteur click sur le bouton id_retirer (qui va retirer au compte id_compte le montant dans id_montant),

**Virement** :
-  écouteur click sur le bouton id_virement ( qui va virer du compte -id_source au compte id_cible le montant de id_montant_virement)

- Afficher les messages dans le paragraphe (id_message).

Vous pouvez vous aider de la maquette ci-dessous :

![texte alternatif de l'image](/maquette.png)