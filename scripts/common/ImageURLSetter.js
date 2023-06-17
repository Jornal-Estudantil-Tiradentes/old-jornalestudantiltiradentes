/**
 * Função responsável por criar um setter para definir as URLs de imagem.
 * Retorna um objeto com um método para definir as URLs de imagem com base no seletor.
 * @returns {Object} Objeto com um método para definir as URLs de imagem.
 */
function createImageURLSetter() {
  const DatoCMSFetcher = createDatoCMSFetcher();

  /**
   * Método `setAllBySelector()` do setter para definir as URLs de imagem com base no seletor.
   * @param {string} selector - Seletor CSS para selecionar os elementos de imagem.
   */
  const setAllBySelector = async function (selector) {
    const allImages = document.querySelectorAll(selector);

    for (const image of allImages) {
      const data = await DatoCMSFetcher.getUploadData(image.id);
      const url = data.url;

      image.style.backgroundImage = `url(${url})`;
    }
  };

  // Retorna o objeto com o método para definir as URLs de imagem
  return {
    setAllBySelector,
  };
}
