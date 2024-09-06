function pesquisar() {
    // pega a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value
    
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do jogador.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // coloca sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.
        includes(campoPesquisa) || tags.includes (campoPesquisa)) {
            // cria um novo elemento
            resultados += `
  <div class="item-resultado">
    <h2>
      <a href="#" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href=${dado.link} target="_blank">Mais Informações</a>
  </div>
  `;
        }
        }

        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
    
    section.innerHTML = resultados;
}