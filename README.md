# Ex_10 Fetch + DOM
Cet exercice met en pratique l'usage de **fetch** et les manipulations du **DOM**.\
Il consiste à récupérer des données depuis une API météo et les afficher dans la page HTML.\
\
**Pré-requis** :
```txt
NodeJs,
Terminal Git Bash
```
**Création du projet ViteJs**:
```sh
# dans votre branche saisir les commandes suivantes :
npm create vite@latest ./
npm install
```
**Partie 1 HTML** :\
dans la page HTML *index.html* vous allez reproduire la structure suivante :
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>exercice ex_10 fetch + dom</title>
  </head>
  <body>
	<main>
		<section>
			<div id="bloc_meteo">
				<div id="form">
					<input type="text" id="city" placeholder="Saisir le nom de la ville">
					<button id="charger">Charger</button>
				</div>
			</div>
		</section>
	</main>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```
**Partie 2 CSS**:
```css
/*remplacer le contenu du fichier style.css par le code ci-dessous :*/
:root {
	font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;

	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	background-color: #242424;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#bloc_meteo {
	width: 60vw;
	min-height: 60vh;
	margin: 2vh auto 2vh;
	background-color: #3c3b3b;
	display: flex;
	flex-direction: column;
	#form{
		align-self:center;
		#city, #charger {
			margin: 0.8rem;
		}
		#city {
			height: 40px;
			width: 300px;
			text-align: center;
			font-size: 1.2rem;
		}
		#charger{
			height: 40px;
			width: 100px;
		}
	}
}
```
**Partie 3 JavaScript** :
- 1 Créer un fichier **env.js** dans le dossier src,
- 2 Il va contenir le code ci-dessous :
```js
//Remplacer la valeur de apiKey par votre clé https://openweathermap.org/
export const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxx";
```
- 3 Créer un fichier **fetch_dom.js** dans le dossier sr,
- 4 Importer la clé API comme ci-dessous :
```js
import { apiKey } from './env';
```
- 5 Supprimer le contenu de **main.js** dans le dossier src sauf :
```js
import './style.css'
```
- 6 Importer le fichier **fetch_dom.js** dans main.js
```js
import './fetch_dom.js';
```
Dans le fichier **fetch_dom.js** vous allez réaliser les étapes suivantes :
- 7 Stocker dans des variables les éléments du DOM suivants :
bloc_meteo, input text city, bouton charger.
Création d'éléments HTML :
- 8 Créer une div qui va se nommer box (createElement),
- 9 Assigner à la box les propriétés de style suivantes (.style):\
display : flex, flexDirection : column
- 10 Ajouter la box comme enfant à boc_meteo (appendChild)
Créer une boucle qui va répéter 3 fois les étapes ci-dessous :
- 11 Créer un élément HTML de type h2,
- 12 Lui assigner les les propriétés de style suivantes (.style) :\
width : auto, height : 10vh, backgroundColor : grey, textAlign : center,\
alignContent : 'center', paddingTop : 20px, paddingBottom : 20px
- 13 Ajouter avec textContent le texte suivant : vide,
- 14 Ajouter un attribut (setAttribute) id qui aura comme valeur :
id_title1 (premier), puis id_title2 et id_title3 (incrémenter avec i + 1)
- 15 Ajouter a box le titre (appendChild)
- 16 Créer une méthode **etMeteoCity** en **async** qui va prendre en paramètre un nom de ville\
La méthode va devoir réaliser les étapes suivantes :
- fetch l'API météo avec dans le queryParm **q** la ville passée en paramètre, 
- retourner une promise au format JSON (méthode json()).
- 17 Ajouter un écouteur d'événement click sur le bouton charger,\
Ajouter la logique suivante dans le callback de l'écouteur :
- 18 Récupérer la value de la ville (city),
- 19 Vérifier si elle n'est pas vide,
- 20 Appeler la méthode **getMeteoCity** et lui passer la ville en paramètre
- 21 Ajouter un **then** à l'appel de la méthode **getMeteoCity** 
```js
getMeteoCity("ville").then(data => {
    //traitement
})
```
- 22 Assigner au title1 le texte suivant concaténé avec la valeur name du JSON :
`Ville : ${name du JSON}`
- 23 Assigner au title2 le texte suivant concaténé avec la valeur de temp du JSON :
`Température : ${temperature du JSON} ° `
- 24 Assigner au title3 le texte suivant concaténé avec la valeur temps qu'il fait (decription) du JSON:
`Temps : ${description du JSON}`


**BONUS** :
- Tester le cas ou la ville n'existe pas (tester avant sous bruno ce que retourne l'API valide ou pas),
Si la ville n'existe pas afficher une erreur dans le **title1** à la place du nom de la ville,
- Dans le **then** de la méthode **getMeteoJson** créer une image (createElement) avec les propriétés suivantes :\
width : 90px, height : 90px, alignSelf : start,\
dans la source de l'image la concaténation de l'url et de la valeur icon dans le JSON:
https://openweathermap.org/img/wn/*valeur icon du JSON*@2x.png\
Ajouter à la box avec appendChild l'image.