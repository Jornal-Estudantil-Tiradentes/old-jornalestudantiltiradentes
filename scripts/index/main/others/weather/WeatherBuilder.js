/**
 * Função responsável por criar um construtor de informações climáticas.
 * Retorna um objeto com um método `build()` para criar as informações climáticas.
 * @returns {Object} Objeto com método `build()` para criar as informações climáticas.
 */
function createWeatherBuilder() {
  /**
   * Método `build()` do construtor de informações climáticas.
   * Constrói as informações climáticas e as adiciona ao elemento contêiner fornecido.
   * @param {Object} data - Objeto contendo os dados climáticos.
   * @param {HTMLElement} container - Elemento contêiner onde as informações climáticas serão adicionadas.
   */
  const build = function (data, container) {
    // Limpa o conteúdo do contêiner antes de construir as informações climáticas
    container.innerHTML = "";

    // Cria o elemento div para o texto das informações climáticas
    const text = document.createElement("div");
    text.className = "weather__text";

    // Cria o elemento h2 para exibir o nome da cidade
    const city = document.createElement("h2");
    city.className = "weather__city";
    city.textContent = data.name;

    // Cria o elemento span para exibir a descrição do clima e a umidade
    const description = document.createElement("span");
    description.className = "weather__description";
    const descriptionText = `${data.weather[0].description
      .charAt(0)
      .toUpperCase()}${data.weather[0].description.slice(1)} • ${
      data.main.humidity
    }%`;
    description.textContent = descriptionText;

    // Adiciona os elementos de texto ao elemento principal
    text.append(city, description);

    // Cria o elemento div para as informações principais do clima
    const main = document.createElement("div");
    main.className = "weather__main";

    // Cria o elemento h2 para exibir a temperatura
    const temp = document.createElement("h2");
    temp.className = "weather__temp";
    temp.textContent = `${data.main.temp.toFixed(1)}ºC`;

    // Cria o elemento span para exibir a sensação térmica
    const feelsLike = document.createElement("span");
    feelsLike.className = "weather__feels-like";
    feelsLike.textContent = `Sensação de ${data.main.feels_like.toFixed(1)}ºC`;

    // Cria o elemento div para exibir o ícone do clima
    const icon = document.createElement("div");
    icon.className = "weather__icon";
    icon.style.backgroundImage = `url('https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`;

    // Adiciona os elementos principais ao elemento principal
    main.append(temp, feelsLike, icon);

    // Adiciona os elementos de texto e principais ao contêiner
    container.append(text, main);
  };

  // Retorna o objeto com o método `build()`
  return {
    build,
  };
}
