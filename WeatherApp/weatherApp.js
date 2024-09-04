const apiKey="f4a86bc8e20cf0f0c7b7f310fb9374c7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector('.searchInput');
const searchBtn=document.querySelector('.searchBtn');
const weatherIcon=document.querySelector('.weatherIcon');
const weatherContainer=document.querySelector('.container');


async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status === 404){

        document.querySelector('.error').style.display="block";
        document.querySelector('.all').style.display="none";
        document.querySelector('.error1').style.display="none";
        weatherContainer.style.backgroundImage="url('images/elegant design.jpeg')";

    }else{
        var data= await response.json();
        document.querySelector('.temperature').innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
        document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';
      
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/sun.png";
            weatherContainer.style.backgroundImage="url('images/view-apocalyptic-dark-clouds.jpg')";
        
  
           
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/sunny.png";
            weatherContainer.style.backgroundImage="url('images/panoramic-view-sunset.jpg')";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
            weatherContainer.style.backgroundImage="url('images/view-starry-night-sky-with-nature-mountains-landscape.jpg')";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/rain.png";
            weatherContainer.style.backgroundImage="url('images/3d-render-misty-island-landscape.jpg')";

        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/foggy.png";
            weatherContainer.style.backgroundImage="url('images/cloud-forest-landscape.jpg')";

        }
      
     
        document.querySelector('.all').style.display="block";
        document.querySelector('.error').style.display="none";
        document.querySelector('.error1').style.display="none";
    
    }
    
    

}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);

})

//current location
function weather() {

    var location = document.getElementById("location");
    var apiKey = 'f4a86bc8e20cf0f0c7b7f310fb9374c7';
    var url = 'http://api.openweathermap.org/geo/1.0/reverse?lat=28.4212°&lon=70.2989&limit={limit}';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      location.innerHTML = 'Latitude is ' + lat + '° Longitude is ' + lon + '°';

       $.getJSON(url + apiKey + "/" + lat + "," + long + "?callback=?", function(data) {
        $('#temp').html(data.currently.temperature + '° F');
        $('#minutely').html(data.minutely.summary);
      });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }

  weather();
