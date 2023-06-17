/**
 * Função responsável por criar um setter para configurar a visualização ampliada de imagens.
 * Retorna um objeto com um método para configurar a visualização ampliada das imagens com base no seletor.
 * @returns {Object} Objeto com um método para configurar a visualização ampliada das imagens.
 */
function createImageViewSetter() {
  const DatoCMSFetcher = createDatoCMSFetcher();

  /**
   * Método `setBySelector()` do setter para configurar a visualização ampliada das imagens com base no seletor.
   * @param {string} selector - Seletor CSS para selecionar os elementos de imagem.
   */
  const setBySelector = function (selector) {
    const allImages = document.querySelectorAll(selector);

    allImages.forEach((image) => {
      setImageViewClickListener(image);
    });
  };

  /**
   * Método `setImageViewClickListener()` do setter para configurar o listener de clique para a visualização ampliada da imagem.
   * @param {HTMLElement} image - Elemento de imagem.
   */
  const setImageViewClickListener = async function (image) {
    const uploadData = await DatoCMSFetcher.getUploadData(image.id);
    const url = uploadData.url;

    image.addEventListener("click", () => {
      window.open(url, "_blank");
    });
  };

  // Retorna o objeto com o método para configurar a visualização ampliada das imagens
  return {
    setBySelector,
  };
}
