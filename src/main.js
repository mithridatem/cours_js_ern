import './style.css'
import { apiKey } from './env.js'

//Fetch (requête) sur l'API météo
const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)
  .then(response=>response.json())
  .then(data=>{ 
    return data
  });

console.log(meteo);
