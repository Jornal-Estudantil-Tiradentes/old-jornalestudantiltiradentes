/**
 * Função responsável por criar um parser para dados do DatoCMS.
 * Retorna um objeto com métodos para filtrar os dados do DatoCMS.
 * @returns {Object} Objeto com métodos para filtrar dados do DatoCMS.
 */
function createDatoCMSParser() {
  /**
   * Método `getOnlyRecords()` do parser para filtrar os dados do DatoCMS e retornar apenas os registros.
   * @param {Array<Object>} data - Array de objetos de dados do DatoCMS.
   * @returns {Array<Object>} Array contendo apenas os registros filtrados.
   */
  const getOnlyRecords = function (data) {
    return data.filter((object) => object.subject && object.title);
  };

  /**
   * Método `getOnlyBlocks()` do parser para filtrar os dados do DatoCMS e retornar apenas os blocos de conteúdo.
   * @param {Array<Object>} data - Array de objetos de dados do DatoCMS.
   * @returns {Array<Object>} Array contendo apenas os blocos de conteúdo filtrados.
   */
  const getOnlyBlocks = function (data) {
    return data.filter((object) => !object.subject);
  };

  const getAllThemesIds = function (data) {
    let records = data.filter((object) => object.subject && object.title);
    let themesIds = [];
    records.forEach((record) => {
      if (!themesIds.includes(record.item_type.id)) {
        themesIds.push(record.item_type.id);
      }
    });
    return themesIds;
  };

  // Retorna o objeto com os métodos de filtragem
  return {
    getOnlyRecords,
    getOnlyBlocks,
    getAllThemesIds,
  };
}
