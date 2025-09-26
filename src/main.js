import './style.css';
import 'leaflet/dist/leaflet.css';
import Leaflet  from 'leaflet';

//Création de la map centréé sur toutlouse
const map = Leaflet.map('map').setView([43.604429, 1.443812], 14);

//Ajout du calque OpenStreetMap
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

