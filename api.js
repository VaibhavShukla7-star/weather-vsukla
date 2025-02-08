const apiKey="027a79a3b4275e36370e9f6f434dc350";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input=document.querySelector("input");
const button=document.querySelector("button");
const weticon=document.querySelector("img");

    async function getWeatherData(city) {
        const response = await fetch(apiURL +city+ `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML="Place="+data.name;
        document.querySelector(".temp").innerHTML="Temperature="+data.main.temp+" C";
        document.querySelector(".humidity").innerHTML="Humidity="+data.main.humidity+"%";
        document.querySelector(".wind").innerHTML="WindSpeed="+data.wind.speed+" km/s";
        if(data.name=="undefined")
            document.querySelector(".city").innerHTML="Weather not available";
        else{
        
        if(data.weather[0].main=="Clouds")
        {
            weticon.src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-cloudy-icon-png-image_450295.jpg";
        }
        else if(data.weather[0].main=="Rain")
        {
            weticon.src="https://t4.ftcdn.net/jpg/03/38/74/43/360_F_338744374_c8v4RyKnToRWqPA4SalFf8ktaMQA48QW.jpg";
        }
        else if(data.weather[0].main=="Clear")
        {
            weticon.src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            weticon.src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png";
        }
    
    }
}
    input.addEventListener("keypress", function(e){
        if(e.key=='Enter')
    getWeatherData(input.value);
    })
   