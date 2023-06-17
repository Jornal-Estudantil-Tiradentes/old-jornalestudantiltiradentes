/**
 * Objeto que mapeia os construtores de elementos HTML para cada tipo de bloco.
 */
const constructorsFunctions = {
  1482620(block) {
    // Cabeçalho 3
    const h3 = document.createElement("h3");
    h3.innerText = block.h3_text;
    return h3;
  },

  1482614(block) {
    // Parágrafo
    const p = document.createElement("p");
    p.innerText = block.paragraph_text;
    return p;
  },

  1456838(block) {
    // Bloco de citação
    const blockquote = document.createElement("blockquote");
    const blockquoteAuthor = document.createElement("span");
    blockquote.innerText = block.blockquote_text;
    blockquoteAuthor.innerText = block.blockquote_author;
    blockquote.appendChild(blockquoteAuthor);
    return blockquote;
  },

  1618542(block) {
    // Bloco de citação com imagem
    const blockquoteWithImg = document.createElement("blockquote");
    const blockquoteAuthor = document.createElement("span");
    const blockquoteImg = document.createElement("div");
    blockquoteImg.id = block.blockquote_img.upload_id;
    blockquoteImg.classList.add("blockquote__img", "datoimg");
    blockquoteWithImg.innerText = block.blockquote_text;
    blockquoteAuthor.innerText = block.blockquote_author;
    blockquoteImg.id = block.blockquote_img.upload_id;
    blockquoteWithImg.append(blockquoteAuthor, blockquoteImg);
    return blockquoteWithImg;
  },

  1876732(block, allBlocks) {
    // Lista ordenada
    console.log(block);
    const ol = document.createElement("ol");
    block.ol.forEach((id) => {
      allBlocks.forEach((block) => {
        if (block.id === id) {
          const li = document.createElement("li");
          li.innerText = block.li;
          ol.appendChild(li);
        }
      });
    });
    return ol;
  },

  1845472(block, allBlocks) {
    // Lista não-ordenada
    const ul = document.createElement("ul");
    block.ul.forEach((id) => {
      allBlocks.forEach((block) => {
        if (block.id === id) {
          const li = document.createElement("li");
          li.innerText = block.li;
          ul.appendChild(li);
        }
      });
    });
    return ul;
  },

  1875195(block, allBlocks) {
    // Diálogo
    const dialogueList = document.createElement("ol");
    dialogueList.classList.add("dialogue");
    block.dialogue_list.forEach((id) => {
      allBlocks.forEach((block) => {
        if (block.id === id) {
          const speechItem = document.createElement("li");
          speechItem.classList.add("dialogue__speech-item");
          const person = document.createElement("span");
          person.classList.add("person");
          person.innerText = block.person;
          const speech = document.createElement("p");
          speech.classList.add("speech");
          speech.innerText = block.speech;
          speechItem.append(person, speech);
          dialogueList.appendChild(speechItem);
        }
      });
    });
    return dialogueList;
  },

  1482616(block) {
    // Imagem
    const imgDiv = document.createElement("div");
    const imgCaption = document.createElement("span");
    imgDiv.classList.add("img", "datoimg", "allow-open-in-new-tab");
    imgDiv.id = block.image_img.upload_id;
    imgCaption.innerText = block.image_caption;
    imgDiv.appendChild(imgCaption);
    return imgDiv;
  },

  1871062(block) {
    // Galeria de Imagens
    console.log(block);
    const galery = document.createElement("div");
    galery.classList.add("galery");
    block.galery_images.forEach((imageData) => {
      const image = document.createElement("div");
      image.id = imageData.upload_id;
      image.classList.add("galery__img", "datoimg", "allow-open-in-new-tab");
      const caption = document.createElement("span");
      caption.textContent = block.caption;
      image.appendChild(caption);
      galery.appendChild(image);
    });
    return galery;
  },

  1482619(block) {
    // Vídeo
    const youtubeVideoId = block.video_video.url.split("v=")[1];
    const embedVideoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
    const iframe = document.createElement("iframe");
    iframe.classList.add("video");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "515");
    iframe.setAttribute("src", embedVideoUrl);
    iframe.setAttribute("title", block.video_video.title);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    iframe.setAttribute("allowfullscreen", true);
    return iframe;
  },
};

/**
 * Cria um construtor de conteúdo para os artigos.
 */
function createContentBuilder() {
  /**
   * Constrói o conteúdo do artigo com base nos registros e blocos fornecidos.
   */
  const buildContent = function (record, blocks, container) {
    container.innerHTML = "";
    console.log(blocks);
    const blockIds = record.body;
    blockIds.forEach((id) => {
      blocks.forEach((block) => {
        if (block.id === id) {
          const constructorFunction = constructorsFunctions[block.item_type.id];
          if (!constructorFunction) return;
          const htmlElement = constructorFunction(block, blocks);
          container.appendChild(htmlElement);
        }
      });
    });
  };

  return {
    buildContent,
  };
}
