/**
 * Função responsável por criar um setter para o título do cabeçalho.
 * Retorna um objeto com um método para definir o título do cabeçalho.
 * @param {HTMLElement} title - Elemento do título do cabeçalho.
 * @returns {Object} Objeto com um método para definir o título do cabeçalho.
 */
function createHeaderTitleSetter(title) {
  /**
   * Método `setTitle()` do setter para definir o título do cabeçalho.
   * @param {string} text - Texto do título a ser definido.
   */
  const setTitle = function (text) {
    title.textContent = text.toUpperCase();
    title.classList.remove("skeleton", "skeleton-text");
  };

  // Retorna o objeto com o método para definir o título do cabeçalho
  return {
    setTitle,
  };
}
