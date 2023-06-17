/**
 * Cria um construtor para a lista de artigos.
 *
 * @returns {Object} Um objeto contendo o método `build` para construir a lista de artigos.
 */
function createArticlesListBuilder() {
  /**
   * Constrói a lista de artigos no contêiner fornecido.
   *
   * @param {Array} records - Os registros de artigos a serem exibidos na lista.
   * @param {HTMLElement} container - O elemento HTML em que a lista de artigos será construída.
   */
  const build = function (records, container) {
    container.innerHTML = "";

    if (!records || records.length === 0 || records === undefined) {
      // Exibe uma mensagem de erro caso não haja registros
      const error = document.createElement("h2");
      error.classList.add("error");
      error.innerText = `Ops! Não encontramos nada aqui :(`;
      container.appendChild(error);
    } else {
      records.forEach((record) => {
        // Cria um link para o artigo
        const anchor = document.createElement("a");
        anchor.href = `/pages/article.html?${record.id}`;

        // Cria o elemento do artigo
        const article = document.createElement("article");
        article.classList.add("article");

        // Cria o elemento da imagem do artigo
        const img = document.createElement("div");
        img.classList.add("article__img", "datoimg");
        img.id = record.thumbnail.upload_id;

        // Cria o elemento de texto do artigo
        const text = document.createElement("div");
        text.classList.add("article__text");

        // Cria o elemento do assunto do artigo
        const subject = document.createElement("span");
        subject.classList.add("article__subject");
        subject.innerText = record.subject;

        // Cria o elemento do título do artigo
        const title = document.createElement("h2");
        title.classList.add("article__title");
        title.innerText = record.title;

        // Cria o elemento da descrição do artigo
        const description = document.createElement("p");
        description.classList.add("article__description");
        description.innerText = record.description;

        // Cria o elemento da data de atualização do artigo
        const updatedAt = document.createElement("span");
        updatedAt.classList.add("article__updated_at");
        updatedAt.innerText = `Atualizado em ${new Date(record.meta.updated_at).toLocaleString()}`;

        // Adiciona os elementos de texto ao elemento do artigo
        text.append(subject, title, description, updatedAt);

        // Adiciona os elementos ao elemento do artigo
        article.append(img, text);

        // Adiciona o elemento do artigo ao link
        anchor.appendChild(article);

        // Adiciona o link ao contêiner
        container.append(anchor);
      });
    }
  };

  return {
    build,
  };
}
