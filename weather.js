const weather = document.querySelector(".js-weather");

const API_KEY = "";         // OpenWeatherMap API Key
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText=`${temperature}℃ @ ${place}`;
    });
    // then 데이터가 완전히 들어온 후 띄워주는 역할 fetch then ~ fetch 가 다 완료된 후에 실행하라
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){    // local storage에 좌표값이 없을 때에 실행됨
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geolocation");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        // getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();
