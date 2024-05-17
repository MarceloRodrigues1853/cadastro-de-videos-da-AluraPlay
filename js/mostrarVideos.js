import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

// Função para construir um card de vídeo
export default function constroiCard(titulo, descricao, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>`;

  return video;
}

// Função para listar os vídeos
async function listaVideos() {
  try {
    const listaApi = await conectaApi.listaVideos();
    if (listaApi.length === 0) {
      // Se a lista estiver vazia, exiba uma mensagem indicando isso
      lista.innerHTML = `<h2 class="menssagem__titulo">Não há vídeos disponíveis no momento</h2>`;
      return;
    }
    // Limpe a lista antes de adicionar os novos itens
    lista.innerHTML = "";
    listaApi.forEach((elemento) =>
      lista.appendChild(
        constroiCard(
          elemento.titulo,
          elemento.descricao,
          elemento.url,
          elemento.imagem
        )
      )
    );
  } catch (error) {
    // Em caso de erro ao carregar os vídeos, exiba uma mensagem de erro
    lista.innerHTML = `<h2 class="menssagem__titulo">Não foi possível carregar a lista de vídeos</h2>`;
    console.error("Erro ao carregar vídeos:", error);
  }
}

// Chame a função para listar os vídeos quando a página carregar
listaVideos();
