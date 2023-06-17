/**
 * Função responsável por criar um construtor de artigos de notícias.
 * Retorna um objeto com um método `build()` para criar os artigos.
 * @returns {Object} Objeto com método `build()` para criar os artigos.
 */
function createArticlesBuilder() {
  /**
   * Método `build()` do construtor de artigos.
   * Constrói os artigos de notícias e os adiciona ao elemento contêiner fornecido.
   * @param {Array} records - Array contendo os registros de notícias.
   * @param {HTMLElement} container - Elemento contêiner onde os artigos serão adicionados.
   */
  const build = function (records, container) {
    // Limpa o conteúdo do contêiner antes de construir os artigos
    container.innerHTML = "";

    // Embaralha os registros para distribuir melhor a entrega de conteúdo
    const shuffledRecords = records.sort(() => {
      return Math.random() - 0.5;
    });

    // Percorre os registros de notícias e constrói os artigos correspondentes
    shuffledRecords.forEach((record) => {
      // Cria o elemento âncora para o link do artigo
      const anchor = document.createElement("a");
      anchor.href = `/pages/article.html?${record.id}`;

      // Cria o elemento article para envolver os dados do artigo
      const article = document.createElement("article");
      article.className = "news__article";

      // Cria o elemento div para a imagem do artigo
      const image = document.createElement("div");
      image.className = "news__image datoimg";
      image.id = record.thumbnail.upload_id;

      // Cria o elemento div para o texto do artigo
      const text = document.createElement("div");
      text.className = "news__text";

      // Cria o elemento span para o assunto do artigo
      const subject = document.createElement("span");
      subject.className = "news__subject";
      subject.textContent = record.subject;

      // Cria o elemento h2 para o título do artigo
      const title = document.createElement("h2");
      title.className = "news__title";
      title.textContent = record.title;

      // Cria o elemento p para a descrição do artigo
      const description = document.createElement("p");
      description.className = "news__description";
      description.textContent = record.description;

      // Cria o elemento span para a data de atualização do artigo
      const updatedAt = document.createElement("span");
      updatedAt.className = "news__updated_at";
      updatedAt.textContent = `Atualizado em ${new Date(
        record.meta.updated_at
      ).toLocaleString()}`;

      // Adiciona os elementos filho ao elemento de texto do artigo
      text.append(subject, title, description, updatedAt);

      // Adiciona os elementos de imagem e texto ao elemento do artigo
      article.append(image, text);

      // Adiciona o elemento article ao elemento âncora
      anchor.appendChild(article);

      // Adiciona o elemento âncora ao contêiner
      container.append(anchor);
    });
  };

  // Retorna o objeto com o método `build()`
  return {
    build,
  };
}
