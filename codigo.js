const claveApi = '026875c2cb414b5d815145040261909'; 
const idioma = 'es';
const inpCiudad = document.getElementById('input-ciudad');

async function obtenerClima() {
  const ciudad = inpCiudad.value;
  if (!ciudad) {
    alert('Por favor, ingresa una ciudad');
    return;
  }

  const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
  try {
    const response = await fetch(apiClimaActual);
    const data = await response.json();
    
    if (data.error) {
      alert('Ciudad no encontrada');
      return;
    }

    mostrarClima(data);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

function mostrarClima(data) {
  document.querySelector('.clima-icono').src = "https:" + data.current.condition.icon;
  document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
  document.querySelector('.temp').innerHTML = Math.round(data.current.temp_c) + '°c';
  document.querySelector('.ciudad').innerHTML = data.location.name;
  document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
  document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
} 