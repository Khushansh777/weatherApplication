//API Key
const apiKey =  '2d245e7b37b6cda7e092b72b37a60620';
// Declaration of variables
const input = document.querySelector('#city-input');
const tempContainer =  document.querySelector('#temperature');
const descriptionContainer = document.querySelector('#description');
const cityContainer = document.querySelector('#city');
const windContainer =  document.querySelector('#wind')
const humidityConstainer = document.querySelector('#humidity');
const pressureontainer = document.querySelector('#pressure');
const searchBtn  = document.querySelector('#search-btn');
const weatherBoxContainer = document.querySelector('.weather-box');
const imageContainer =  document.querySelector('#weather-icon');
let weatherdes;

//fetch Data
const fetchData = async (param)=> {
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`;
  try {
    const response  = await fetch(url);
    if(!response){
        throw new Error(`Response status: ${response.status}`);
    }
     const  data = await response.json()   
    console.log(data);
    console.log(data.main.temp)
    return data
  }
  catch(error){
    console.log(`error ${error}`);
  }

}

// hides when nothing is there
if(input.value.trim() === ''){
    weatherBoxContainer.style.display =  'none'
}

// make Search button work

searchBtn.addEventListener('click', async() => {
    fetchAndDisplayData()
})

// function to fetch Data and display it
async function fetchAndDisplayData(){
const inputVal = input.value.trim();
if(inputVal == ''){
    weatherBoxContainer.style.display = 'none'
    alert('PLs write a Valid City name');
    return
}
try{
    const data = await fetchData(inputVal);
    console.log(data)
    weatherBoxContainer.style.display = 'block';
    tempContainer.innerHTML = `${fahrenheitToCelsius(data.main.temp)}°C`;
    cityContainer.innerHTML = data.name;
    descriptionContainer.innerHTML = data.weather[0].description;
    windContainer.innerHTML = `${data.wind.speed} kmph`;
    humidityConstainer.innerHTML = `${data.main.humidity} %`;
    pressureontainer.innerHTML = data.main.pressure;
    
    imageContainer.innerHTML = ` <img src="${weatherdes}" alt="weather icon" id="weather-icon">`
    
    }
catch(error){
    console.log('error', error);
}   
    
}
    


// convert into Celsius
function fahrenheitToCelsius(f) {
  return Math.round(f - 273.15 );
}

console.log(fahrenheitToCelsius(297.7));

// press enter to work functionality

input.addEventListener('keypress', (event) =>{
    if(event.key === "Enter"){
        fetchAndDisplayData();
    }
})



