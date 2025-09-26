- 1 Installer la librairie Leaflet avec npm :
```sh
npm install leaflet
```

- 2 Importer leaflet.css et leaflet dans main.js

```js
import 'leaflet/dist/leaflet.css';
import Leaflet  from 'leaflet';
```

- 3 Ajouter une div qui va contenir la carte :
```html
<div id="map"></div>
```

- 4 Ajouter une hauteur en CSS
```css
#map { 
    height:30vh;
    width:50vw; 
}
```

-5 Créer la map en JS :
```js
//Création de la map centréé sur Toulouse
const map = Leaflet.map('map').setView([43.604429, 1.443812], 14);

//Ajout du calque OpenStreetMap
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
```
