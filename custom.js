const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "c404365d601c675fd2db96db1f0bcc12";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcone = document.querySelector('.weather_icon')

   

async function checkweader(city){
    const respons = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(respons.status == 404){
        document.querySelector('.error').style.display ="block"
        document.querySelector('.weather').style.display ="none";

    }

    else{
  var data = await respons.json()
    console.log(data);

    const cityName = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
           cityName.innerHTML = data.name;
           temp.innerHTML = Math.round(data.main.temp) + "°c";
           humidity.innerHTML = data.main.humidity + " %";
           wind.innerHTML = data.wind.speed + " km/h"; 
           
           if(data.weather[0].main == "clouds"){
                weatherIcone.src = "images/clodus.png";
           }
           else if(data.weather[0].main == "Clear"){
            weatherIcone.src = "images/clear.png";
           }
           else if(data.weather[0].main == "Rain"){
            weatherIcone.src = "images/rain.png";
           }
           else if(data.weather[0].main == "Drizzle"){
            weatherIcone.src = "images/drizzel.png";
           }
           else if(data.weather[0].main == "Mist"){
            weatherIcone.src = "images/mist.png";
           }

           document.querySelector('.weather').style.display ="block"
           document.querySelector('.error').style.display ="none"

};
    };
    

    searchBtn.addEventListener('click', ()=>{
          checkweader(searchBox.value);
    });

