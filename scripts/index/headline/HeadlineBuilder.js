/**
 * Função responsável por criar um construtor de destaques do jornal.
 * Retorna um objeto com um método `build()` para criar os destaques.
 * @returns {Object} Objeto com método `build()` para criar os destaques.
 */
function createHeadlineBuilder() {
  /**
   * Função interna responsável por construir um único destaque.
   * @param {Array} highlight - Array contendo o destaque principal.
   * @returns {HTMLElement} Elemento HTML do destaque.
   */
  function buildHighlight(highlight) {
    const highlightObject = highlight[0];

    // Cria o elemento div para o destaque principal
    const highlightElement = document.createElement("div");
    highlightElement.className = "highlight";

    // Cria o elemento âncora para o link do destaque
    const anchor = document.createElement("a");
    anchor.href = `/pages/article.html?${highlightObject.id}`;

    // Cria o elemento article para envolver os dados do destaque
    const article = document.createElement("article");
    article.className = "highlight__article";

    // Cria o elemento span para o assunto do destaque
    const subject = document.createElement("span");
    subject.className = "highlight__subject";
    subject.textContent = highlightObject.subject;

    // Cria o elemento h2 para o título do destaque
    const title = document.createElement("h2");
    title.className = "highlight__title";
    title.textContent = highlightObject.title;

    // Cria o elemento p para a descrição do destaque
    const description = document.createElement("p");
    description.className = "highlight__description";
    description.textContent = highlightObject.description;

    // Adiciona os elementos filho ao elemento article
    article.append(subject, title, description);

    // Adiciona o elemento article ao elemento âncora
    anchor.appendChild(article);

    // Adiciona o elemento âncora ao elemento destaque
    highlightElement.append(anchor);

    return highlightElement;
  }

  /**
   * Função interna responsável por construir os destaques secundários.
   * @param {Array} secondary1 - Array contendo o destaque secundário 1.
   * @param {Array} secondary2 - Array contendo o destaque secundário 2.
   * @returns {HTMLElement} Elemento HTML dos destaques secundários.
   */
  function buildSecondary(secondary1, secondary2) {
    const secondaryElement = document.createElement("div");
    secondaryElement.className = "secondary";

    const secondary1Object = secondary1[0];
    const secondary2Object = secondary2[0];

    // Função para criar um elemento de notícia secundária
    const createArticle = (object) => {
      const anchor = document.createElement("a");
      anchor.href = `/pages/article.html?${object.id}`;

      const article = document.createElement("article");
      article.className = "secondary__article datoimg";
      article.id = object.thumbnail.upload_id;

      const subject = document.createElement("span");
      subject.className = "secondary__subject";
      subject.textContent = object.subject;

      const title = document.createElement("h2");
      title.className = "secondary__title";
      title.textContent = object.title;

      article.append(subject, title);
      anchor.append(article);

      return anchor;
    };

    const anchor1 = createArticle(secondary1Object);
    const anchor2 = createArticle(secondary2Object);

    secondaryElement.append(anchor1, anchor2);

    return secondaryElement;
  }

  /**
   * Método `build()` do construtor de destaques.
   * Constrói os destaques e os adiciona ao elemento contêiner fornecido.
   * @param {Array} highlight - Array contendo o destaque principal.
   * @param {Array} secondary1 - Array contendo o destaque secundário 1.
   * @param {Array} secondary2 - Array contendo o destaque secundário 2.
   * @param {HTMLElement} container - Elemento contêiner onde os destaques serão adicionados.
   */
  const build = function (highlight, secondary1, secondary2, container) {
    // Limpa o conteúdo do contêiner antes de construir os destaques
    container.innerHTML = "";

    // Constroi o destaque principal
    const highlightElement = buildHighlight(highlight);

    // Constroi os destaques secundários
    const secondaryElement = buildSecondary(secondary1, secondary2);

    // Adiciona os destaques ao contêiner
    container.append(highlightElement, secondaryElement);
  };

  // Retorna o objeto com o método `build()`
  return {
    build,
  };
}
