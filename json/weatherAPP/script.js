const searcBtn =document.getElementById("searchBtn");
const cityInput =document.getElementById("cityInput");

const cityName =document.getElementById("CityName");
const cityTime =document.getElementById("CityTime");
const cityTemp =document.getElementById("CityTemp");

 const fetchData = async(CityName) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=dbc6acd203764cc0a1995233252607&q=${CityName}&aqi=yes`);
    return await response.json();
}

searcBtn.addEventListener("click", async() =>{
    const value = cityInput.value;
    const result = await fetchData(value);

    cityName.innerHTML = `${result.location.name} -- ${result.location.country}`

    cityTime.innerHTML = `${result.location.localtime}`

    cityTemp.innerHTML = `${result.current.temp_c}C`

    cityInput.value = "";
})