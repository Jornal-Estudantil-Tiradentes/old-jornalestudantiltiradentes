/**
 * Função responsável por criar um fetcher para dados do DatoCMS.
 * Retorna um objeto com métodos para buscar diferentes tipos de dados do DatoCMS.
 * @returns {Object} Objeto com métodos para buscar dados do DatoCMS.
 */
function createDatoCMSFetcher() {
  // URLs dos endpoints da API do Jornal
  const endpoints = {
    listAll: "https://api-jornalestudantiltiradentes.vercel.app/api/all",
    listByTheme: "https://api-jornalestudantiltiradentes.vercel.app/api/list/",
    getById: "https://api-jornalestudantiltiradentes.vercel.app/api/item/",
    getUploadData: "https://api-jornalestudantiltiradentes.vercel.app/api/upload/",
  };

  /**
   * Função auxiliar para buscar dados do DatoCMS através de uma URL.
   * Verifica se a resposta da requisição é bem-sucedida.
   * Em caso negativo, redireciona para uma página de "não encontrado".
   * @param {string} url - URL para buscar os dados do DatoCMS.
   * @returns {Promise<Object|null>} Promise que resolva com os dados ou nulo em caso de erro.
   */
  async function fetchDatoCMS(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        window.location.replace("/pages/not-found.html");
        return;
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data from DatoCMS:", error);
    }
  }

  /**
   * Método `listAll()` do fetcher para buscar todos os dados do DatoCMS.
   * @returns {Promise<Object|null>} Promise que resolva com todos os dados ou nulo em caso de erro.
   */
  const listAll = async function () {
    return await fetchDatoCMS(endpoints.listAll);
  };

  /**
   * Método `listByTheme()` do fetcher para buscar dados do DatoCMS por tema.
   * @param {string} theme - Tema dos dados a serem buscados.
   * @returns {Promise<Object|null>} Promise que resolva com os dados filtrados por tema ou nulo em caso de erro.
   */
  const listByTheme = async function (theme) {
    const url = endpoints.listByTheme + theme;
    return await fetchDatoCMS(url);
  };

  /**
   * Método `getById()` do fetcher para buscar dados do DatoCMS por ID.
   * @param {string} id - ID do item a ser buscado.
   * @returns {Promise<Object|null>} Promise que resolva com os dados do item ou nulo em caso de erro.
   */
  const getById = async function (id) {
    const url = endpoints.getById + id;
    return await fetchDatoCMS(url);
  };

  /**
   * Método `getUploadData()` do fetcher para buscar dados de upload do DatoCMS por ID.
   * @param {string} uploadId - ID do upload a ser buscado.
   * @returns {Promise<Object|null>} Promise que resolva com os dados do upload ou nulo em caso de erro.
   */
  const getUploadData = async function (uploadId) {
    const url = endpoints.getUploadData + uploadId;
    return await fetchDatoCMS(url);
  };

  // Retorna o objeto com os métodos de busca
  return {
    listAll,
    listByTheme,
    getById,
    getUploadData,
  };
}
