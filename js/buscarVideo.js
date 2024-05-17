import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault(); // Corrija o nome do método: `preventDefault()` em vez de `preventDefalt()`

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);

  const lista = document.querySelector("[data-lista]");

  // Limpa a lista antes de adicionar novos itens
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  // Adiciona os novos itens à lista
  busca.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );

  // Verifica se não há resultados de busca e exibe uma mensagem adequada
  if (busca.length == 0) {
    // Corrija a propriedade 'legth' para 'length'
    lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
  }
}

const botaoDePesquisa = document.querySelector("[data-boatao-pesquisa]"); // Corrija o nome da data attribute: `data-boatao-pesquisa` em vez de `data-botao-pesquisa`

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
