/**
 * Função responsável por criar um fetcher de dados climáticos.
 * Retorna um objeto com um método `getByCoords()` para buscar dados climáticos com base nas coordenadas geográficas.
 * @returns {Object} Objeto com método `getByCoords()` para buscar dados climáticos.
 */
function createWeatherFetcher() {
  /**
   * Método `getByCoords()` do fetcher de dados climáticos.
   * Busca dados climáticos com base nas coordenadas geográficas fornecidas.
   * @param {number} latitude - Latitude das coordenadas geográficas.
   * @param {number} longitude - Longitude das coordenadas geográficas.
   * @returns {Promise<Object|null>} Promise que resolva com os dados climáticos ou nulo em caso de erro.
   */
  const getByCoords = async function (latitude, longitude) {
    const apiUrl = `https://api-jornalestudantiltiradentes.vercel.app/api/weather/${latitude}/${longitude}`;
    try {
      const response = await fetch(apiUrl);
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  // Retorna o objeto com o método `getByCoords()`
  return {
    getByCoords,
  };
}
