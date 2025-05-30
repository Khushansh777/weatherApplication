//API Key
const apiKey =  '2d245e7b37b6cda7e092b72b37a60620';
// Declaration of variables
const input = document.querySelector('#city-input');
const tempContainer =  document.querySelector('#temperature');
const cityContainer = document.querySelector('#city');
const windContainer =  document.querySelector('#wind')
const humidityConstainer = document.querySelector('#humidity');
const pressureontainer = document.querySelector('#pressure');

//fetch Data
async function fetchData(param){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${apiKey}`;
  try {
    const response  = await fetch(url);
    if(!response){
        throw new Error(`Response status: ${response.status}`);
    }
    const responseJson =response.json()
    console.log(responseJson);
  }
  catch(error){
    console.log(`error ${error}`);
  }

}

fetchData()

