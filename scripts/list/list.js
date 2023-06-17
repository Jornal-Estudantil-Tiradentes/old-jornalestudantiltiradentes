/**
 * Renderiza a lista de artigos com base no tema fornecido na URL.
 */
async function renderList() {
  const windowHref = window.location.href;

  // Verifica se o tema está presente na URL
  if (!windowHref.split("?")[1]) {
    window.location.replace("/pages/not-found.html");
    return;
  }

  const themeQuery = windowHref.split("?")[1];
  const headerTitle = document.querySelector(".header__title");
  const articlesListContainer = document.querySelector(".articles-list");

  const DatoCMSFetcher = createDatoCMSFetcher();
  const ImageURLSetter = createImageURLSetter();
  const HeaderTitleSetter = createHeaderTitleSetter(headerTitle);
  const articlesListBuilder = createArticlesListBuilder();

  // Obtém os registros de artigos com base no tema fornecido
  const records = await DatoCMSFetcher.listByTheme(themeQuery);

  // Define o título do cabeçalho
  if (records[0]) {
    HeaderTitleSetter.setTitle(records[0].subject.toUpperCase());
  } else {
    HeaderTitleSetter.setTitle("Jornal Estudantil Tiradentes");
  }

  // Embaralha os registros para distribuir melhor a entrega de conteúdo
  const shuffledRecords = records.sort(() => {
    return Math.random() - 0.5;
  });

  // Constrói a lista de artigos
  articlesListBuilder.build(shuffledRecords, articlesListContainer);

  // Define as URLs das imagens
  ImageURLSetter.setAllBySelector(".datoimg");
}

// Chama a função para renderizar a lista de artigos
renderList();
