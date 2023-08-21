/**
 * Cria um construtor de cabeçalho do artigo.
 *
 * @returns {Object} O objeto contendo a função `buildHead`.
 */
function createHeadBuilder() {
  /**
   * Constrói o cabeçalho do artigo com base nas informações fornecidas.
   *
   * @param {Object} record - O registro contendo as informações do cabeçalho.
   * @param {HTMLElement} container - O contêiner HTML onde o cabeçalho será renderizado.
   */
  const buildHead = function (record, container) {
    container.innerHTML = "";

    // Cria o elemento de título do artigo
    const title = document.createElement("h2");
    title.classList.add("article__title");
    title.innerText = record.title;

    // Cria o elemento de descrição do artigo
    const description = document.createElement("p");
    description.classList.add("article__description");
    description.innerText = record.description;

    // Cria o elemento de autor do artigo
    const author = document.createElement("span");
    author.classList.add("article__author");
    author.innerText = record.author;

    // Cria o elemento de referência do artigo
    const reference = document.createElement("span");
    reference.classList.add("article__reference");
    reference.innerText = record.reference;

    // Cria o elemento de data de atualização do artigo
    const date = document.createElement("span");
    date.classList.add("article__date");
    date.innerText = `Criado em ${new Date(record.meta.created_at).toLocaleString()}.
    Atualizado em ${new Date(record.meta.updated_at).toLocaleString()}`;

    // Define o título da página como o título do artigo
    document.title = record.title;

    // Adiciona os elementos ao contêiner
    container.append(title, description, author, reference, date);
  };

  return {
    buildHead,
  };
}
