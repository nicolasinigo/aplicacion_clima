let ApiKey = '57e5b0f55cbd800665c536b05c9cd2f1';
let diferenciaKelvin = 273.15;



document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudadEntrada = document.getElementById('ciudadEntrada').value;
    if (ciudadEntrada) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadEntrada}&appid=${ApiKey}`)
            .then(response => response.json())
            .then(response => mostrarClima(response))


    }
})

function mostrarClima(response) {
   
    const divMostrar = document.getElementById('datosClima');
    divMostrar.innerHTML='';

    const ciudad =document.createElement('h1');
    ciudad.textContent = `Pais: ${response.name}, ${response.sys.country}`

    const temperatura= document.createElement('p');
    temperatura.textContent = `La Temperatura es: ${Math.floor(response.main.temp-diferenciaKelvin)}°C`

    const humedad = document.createElement('p');
    humedad.textContent = `La humedad: ${response.main.humidity}%`

    const descripcion= document.createElement('p');
    descripcion.textContent = `Descripción meteorologica: ${response.weather[0].description}`
    
    
    divMostrar.appendChild(ciudad);
    divMostrar.appendChild(temperatura);
    divMostrar.appendChild(humedad);
    divMostrar.appendChild(descripcion);
    
}

