// Lista de filmes (poderia ser carregado de um JSON ou API futuramente)
const filmes = [
    {
      titulo: "Matrix",
      descricao: "Um hacker descobre a verdade por trás da realidade.",
      imagem: "assets/imagens/matrix.jpg",
    },
    {
      titulo: "Interestelar",
      descricao: "Exploração espacial em busca de um novo lar para a humanidade.",
      imagem: "assets/imagens/interestelar.jpg",
    },
    {
      titulo: "O Senhor dos Anéis",
      descricao: "Uma jornada épica pela Terra Média.",
      imagem: "assets/imagens/senhor-dos-aneis.jpg",
    },
    {
      titulo: "Oppenheimer",
      descricao: "A história do pai da bomba atômica.",
      imagem: "assets/imagens/oppenheimer.jpg",
    },
  ];
  
  // Referência ao container principal
  const catalogo = document.getElementById('catalogo');
  const searchInput = document.getElementById('searchInput');
  
  // Função para renderizar os filmes
  function renderFilmes(lista) {
    catalogo.innerHTML = '';
  
    if (lista.length === 0) {
      catalogo.innerHTML = '<p style="text-align:center; width: 100%">Nenhum filme encontrado.</p>';
      return;
    }
  
    lista.forEach(filme => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      card.innerHTML = `
        <img src="${filme.imagem}" alt="Capa do filme ${filme.titulo}" />
        <div class="card-content">
          <h2 class="card-title">${filme.titulo}</h2>
          <p class="card-description">${filme.descricao}</p>
        </div>
      `;
  
      catalogo.appendChild(card);
    });
  }
  
  // Filtro ao digitar no campo de busca
  searchInput.addEventListener('input', () => {
    const termo = searchInput.value.toLowerCase();
    const filtrados = filmes.filter(filme =>
      filme.titulo.toLowerCase().includes(termo)
    );
    renderFilmes(filtrados);
  });
  
  // Renderização inicial
  renderFilmes(filmes);
  