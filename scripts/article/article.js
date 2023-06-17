/**
 * Renderiza o conteúdo do artigo na página.
 *
 * @returns {Promise<void>} Uma Promise vazia que é resolvida quando a renderização é concluída.
 */
async function renderArticle() {
  // Obtém a URL da janela
  const windowHref = window.location.href;

  // Verifica se há um parâmetro na URL
  if (!windowHref.split("?")[1]) {
    // Redireciona para a página de não encontrado se não houver parâmetro
    window.location.replace("/pages/not-found.html");
    return;
  }

  // Obtém as referências para os elementos HTML onde serão renderizados os conteúdos
  const headContainer = document.querySelector(".article__head");
  const contentContainer = document.querySelector(".article__content");
  const headerTitle = document.querySelector(".header__title");

  // Cria instâncias dos utilitários necessários
  const DatoCMSFetcher = createDatoCMSFetcher();
  const DatoCMSParser = createDatoCMSParser();
  const ImageURLSetter = createImageURLSetter();
  const ImageViewSetter = createImageViewSetter();
  const HeadBuilder = createHeadBuilder();
  const ContentBuilder = createContentBuilder();
  const HeaderTitleSetter = createHeaderTitleSetter(headerTitle);

  // Obtém o ID do artigo da URL
  const idQuery = windowHref.split("?")[1];

  // Obtém os dados do DatoCMS
  const data = await DatoCMSFetcher.getById(idQuery);

  // Filtra apenas os registros do artigo
  const recordArray = DatoCMSParser.getOnlyRecords(data);

  // Encontra o registro com base no ID
  const record = recordArray.find((record) => record.id == idQuery);

  // Verifica se o registro foi encontrado
  if (!record) {
    // Redireciona para a página de não encontrado se o registro não for encontrado
    window.location.replace("/pages/not-found.html");
    return;
  }

  // Filtra apenas os blocos do artigo
  const blocks = DatoCMSParser.getOnlyBlocks(data);

  // Define o título do cabeçalho do artigo no cabeçalho da página
  HeaderTitleSetter.setTitle(record.subject, headerTitle);

  // Constrói o cabeçalho do artigo
  HeadBuilder.buildHead(record, headContainer);

  // Constrói o conteúdo do artigo
  ContentBuilder.buildContent(record, blocks, contentContainer);

  // Define as URLs das imagens
  ImageURLSetter.setAllBySelector(".datoimg");

  // Configura o visualizador de imagem para abrir em nova aba
  ImageViewSetter.setBySelector(".allow-open-in-new-tab");
}

// Renderiza o artigo
renderArticle();
