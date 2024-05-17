import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
  evento.preventDefault();

  // Obtenha os valores dos campos do formulário
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.floor(Math.random() * 10).toString(); // Gere uma descrição aleatória para o vídeo

  try {
    // Chame a função para criar um novo vídeo na API
    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    // Redirecione para a página de envio concluído após o sucesso
    window.location.href = "../pages/envio-concluido.html";
  } catch (e) {
    // Trate qualquer erro que possa ocorrer durante o envio do vídeo
    alert(e);
  }
}

// Adicione um evento de escuta para o envio do formulário
formulario.addEventListener("submit", (evento) => criarVideo(evento));
