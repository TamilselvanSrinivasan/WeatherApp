const apikey="2101a33d9b4954bddbab27f066ef066d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const cityname=document.querySelector(".search input");

const searchbtn=document.querySelector(".search button");

const weather_icon=document.querySelector('.weather-icon');

async function checkweather(city)
{
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    var data =await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity+ "%";
    document.querySelector('.wind').innerHTML = data.wind.speed+" km/hr";
    
    if(data.weather[0].main=="Clouds")
    {
        weather_icon.src="image/clouds.png"
    }
   else if(data.weather[0].main=="Clear")
    {
        weather_icon.src="image/clear.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weather_icon.src="image/drizzle.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weather_icon.src="image/mist.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weather_icon.src="image/rain.png"
    }
    document.querySelector('.weather').style.display='block'
    console.log(data)
}

searchbtn.addEventListener('click',()=>{
    checkweather(cityname.value);
})

//https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=2101a33d9b4954bddbab27f066ef066d


