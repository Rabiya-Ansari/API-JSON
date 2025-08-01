const searcbtn =document.getElementById("searchbtn");
const cityinput =document.getElementById("cityinput");

const cityname =document.getElementById("cityname");
const cityTime =document.getElementById("cityTime");
const cityTemp =document.getElementById("cityTemp");

async function getData(cityname) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=dbc6acd203764cc0a1995233252607&q=London&aqi=no
`)
return await response.json();
}

searcbtn.addEventListener("click", async() =>{
    const value = cityinput.value;
    const result = await getData(value);

    cityname.innerHTML = `${result.location.name} -- ${result.location.country}`

    cityTime.innerHTML = `${result.location.localtime}`

    cityTemp.innerHTML = `${result.current.temp_c}C`

    cityinput.value = "";
})