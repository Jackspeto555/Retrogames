// console.log(jogos); // Este comando serve para verificar o conteúdo do array 'jogos' no console do navegador.

function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Verifica se a seção foi encontrada corretamente.

  let buscaJogos = document.getElementById("busca").value;
  console.log(buscaJogos);
  if (!buscaJogos) {
    section.innerHTML= "<p> Você não digitou nada.</p>"
     return;

  }
  buscaJogos = buscaJogos.toLowerCase()
  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";
  let titulo = "";
  let desc = "";
  let tags = "";
  // Itera sobre cada jogo no array 'jogos'.

  
  for (let jogo of jogos) {
    titulo = jogo.titulo.toLowerCase()
    desc = jogo.desc.toLowerCase()
    tags = jogo.tags.toLowerCase()
    if(titulo.includes(buscaJogos) || desc.includes(buscaJogos) || tags.includes(buscaJogos)){
    resultados += `
      <div class="item-resultado" id="resultado">
        <h2>
          <a href="#" target="_blank">${jogo.titulo}</a>
        </h2>
        <p class="descricao-meta">${jogo.desc}
          </p>
        <a href=${jogo.link} target="_blank">Mais informações</a>
      </div>
    `;
    
    // Constrói o HTML para cada resultado de jogo.
    // Utiliza template literals (``) para facilitar a inserção de variáveis.
    } 
  }
  if(!resultados) {
    resultados =  "<p>Nada foi encontrado</p>"


  }

  // Atribui o HTML gerado para a seção de resultados.
  section.innerHTML = resultados;
}