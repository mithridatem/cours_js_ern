import { apiKey } from './env';

//Récupérer les éléments du DOM
const blocMeteo = document.querySelector('#bloc_meteo');
const btCharger = document.querySelector('#charger');
const city = document.querySelector('#city');

//DOM
const box = document.createElement('div');
box.style.display = 'flex';
box.style.flexDirection = 'column';
blocMeteo.appendChild(box);

//Créer les 3 titres
for (let i = 0; i < 3; i++) {
    const title = document.createElement("h2");
    title.style.width = 'auto';
    title.style.height = '10vh';
    title.style.backgroundColor = 'grey';
    title.textContent = "vide";
    title.style.textAlign = "center";
    title.style.alignContent = "center";
    title.style.paddingTop = '20px';
    title.style.paddingBottom = '20px';
    title.setAttribute("id", "id_title" + (i + 1));
    box.appendChild(title);
}


//Méthodes (fetch API)

const getMeteoJson = async (city) => {
    return await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=fr&units=metric&appid=' + apiKey)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } 
            return response;
        }).catch(error => {
            throw new Error("Le serveur ne répond pas");
        });
}

//écouteur d'évenement
btCharger.addEventListener('click', ()=> {
    
    const titre1 = document.querySelector('#id_title1');
    const titre2 = document.querySelector('#id_title2');
    const titre3 = document.querySelector('#id_title3');
    
    //tester si city est non vide
    if (city.value != "") {
        getMeteoJson(city.value).then(data => {
            if (data.status === 404) {
                titre1.textContent = "La ville n'est pas définie";
                titre2.textContent = "";
                titre3.textContent = "";        
                
            } else {
                titre1.textContent = `Ville : ${data.name}`;
                titre2.textContent = `Température : ${data.main.temp.toFixed(2)} ° `;
                titre3.textContent = `Temps : ${data.weather[0].description}`;
                const icon = document.createElement('img');
                icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                icon.style.width = '90px';
                icon.style.height = '90px';
                icon.style.alignSelf = 'start';
                box.appendChild(icon);
            }
        });
    }

});
