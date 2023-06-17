/**
 * Função assíncrona que renderiza a página inicial do jornal online.
 */
async function renderIndex() {
  // Cria instâncias dos construtores necessários
  const HeadlineBuilder = createHeadlineBuilder();
  const ArticlesBuilder = createArticlesBuilder();

  // Obtém os elementos do DOM onde os conteúdos serão renderizados
  const newsContainer = document.querySelector(".news");
  const headlineContainer = document.querySelector(".headline");
  const weatherContainer = document.querySelector(".weather");

  // Cria instâncias dos utilitários necessários
  const DatoCMSFetcher = createDatoCMSFetcher();
  const DatoCMSParser = createDatoCMSParser();
  const ImageURLSetter = createImageURLSetter();
  const WeatherFetcher = createWeatherFetcher();
  const WeatherBuilder = createWeatherBuilder();

  let weatherData;

  // Obtém a localização atual do usuário
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;

    // Obtém dados do clima com base nas coordenadas
    weatherData = await WeatherFetcher.getByCoords(
      latitude.toFixed(1),
      longitude.toFixed(1)
    );

    // Constroi o componente de previsão do tempo
    WeatherBuilder.build(weatherData, weatherContainer);
  });

  // Obtém todos os dados do DatoCMS
  const allData = await DatoCMSFetcher.listAll();
  const records = DatoCMSParser.getOnlyRecords(allData);

  // Obtém os registros do DatoCMS para os destaques principais e secundários
  const principal = await DatoCMSFetcher.listByTheme("principal");
  const destaque1 = await DatoCMSFetcher.listByTheme("destaque1");
  const destaque2 = await DatoCMSFetcher.listByTheme("destaque2");

  // Constroi os componentes de manchete e artigos
  HeadlineBuilder.build(principal, destaque1, destaque2, headlineContainer);
  ArticlesBuilder.build(records, newsContainer);

  // Define as URLs das imagens em todos os elementos com a classe "datoimg"
  ImageURLSetter.setAllBySelector(".datoimg");
}

// Chama a função de renderização da página inicial
renderIndex();
