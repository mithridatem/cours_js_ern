import './style.css'
import { apiKey } from './env.js'

//Fetch (requête) sur l'API météo
const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&units=metric&lang=fr&appid=' + apiKey)
  .then(response=>response.json())
  .then(data =>{ 
    console.log(data)
  });

//Version avec fonction asynchrone et await
const apiMeteo = async () =>{
	return await fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&units=metric&lang=fr&appid=' + apiKey)
		.then(response => {
			return response.json();
		});
}

//Appel de la méthode (traitement)
apiMeteo().then(json => {
	console.log(json);
});

//Version alternative avec une fonction nommée
async function apiFunction() {
	return await fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&units=metric&lang=fr&appid=' + apiKey)
		.then(response => {
			return response.json();
		});
}

//Appel de la méthode (traitement)
apiFunction().then(json => {
	console.log(json.weather);
})