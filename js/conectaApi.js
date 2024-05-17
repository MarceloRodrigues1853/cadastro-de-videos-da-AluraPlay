// Função para listar vídeos
async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

// Função para criar um novo vídeo
async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });
  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }
  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

// Função para buscar vídeos por termo de busca
async function buscaVideo(termoDeBusca) {
  const conexao = await fetch(`http://localhost:300/videos?q=${termoDeBusca}`);
  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

// Exporta um objeto contendo as funções para uso em outros arquivos
export const conectaApi = {
  listaVideos,
  criaVideo,
  buscaVideo,
};
