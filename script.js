function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o texto digitado pelo usuário no campo de pesquisa e converte para minúsculas
    let entradaPesquisa = document.getElementById("inputBusca").value.toLowerCase();
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada personagem na lista de personagens
    for (let personagem of personagens) {
      // Converte o nome e a descrição do personagem para minúsculas para facilitar a comparação
      let nome = personagem.nome.toLowerCase();
      let descricao = personagem.descricao.toLowerCase();
  
      // Verifica se o nome ou a descrição do personagem contém a palavra pesquisada
      if (nome.includes(entradaPesquisa) || descricao.includes(entradaPesquisa)) {
        // Se encontrar uma correspondência, adiciona um novo elemento HTML com os detalhes do personagem aos resultados
        resultados += (`
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${personagem.nome}</a>
            </h2>
            <p class="descrição-meta">${personagem.descricao}</p>
            <a href="${personagem.link}">Mais informações aqui</a>
          </div>
        `);
      }
    }


      // Verifica se o usuário digitou alguma palavra para pesquisar
    if (entradaPesquisa == "") {
      // Se a pesquisa estiver vazia, exibe uma mensagem de "Nenhum resultado encontrado"
      section.innerHTML = "Nenhum Resultado foi encontrado.";
    } else {
      // Caso contrário, exibe os resultados da pesquisa na seção
      section.innerHTML = resultados;
    }
  }   
  
  
 