// Dados dos projetos/músicas
const projetos = [
  {
    titulo: "Álbum - Commedia D'arte",
    categoria: "Indie POP / R&B contemporâneo / POP latino",
    cantor: "Bea Duarte",
    descricao: "Produção completa de mixagem e masterização para o álbum de estreia.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCsGM43TJh1JWo1fvEVSsG_E0UcW-hRqmOnRrZfMdugaP8H2WCneVK70R&s=10",
    link: "#"
  },
  {
    titulo: "Álbum - Tell me you love me",
    categoria: "POP / R&B / Soul",
    cantor: "Demi Lovato",
    descricao: "Captação de áudio ao vivo com voz e piano",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdQyVWK0BhDbr8N_OqiIUtgvyV0mDrnw3fK8URvXwmUTk7zxCcMglETo&s=10",
    link: "#"
  },
  {
    titulo: "Single - Candyman",
    categoria: "POP / Jazz/ Blues / Swing",
    cantor: "Christina Aguilera",
    descricao: "Co-produção e edição de bateria e baixo.",
    imagem: "https://i.discogs.com/aCpUjO5BbzGe3qj84tpTr9_nc4FsclmkFnQ3oFD7vn8/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMjU0/NTgtMTI1OTM1NTgy/MS5qcGVn.jpeg",
    link: "#"
  }
];

// Função para renderizar os cards com classes do Bootstrap e CSS próprio
function renderizarPortfolio() {
  const container = document.getElementById("portfolio-grid");

  const cardsHTML = projetos.map(item => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 custom-card text-white">
        <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
        <div class="card-body d-flex flex-column">
          <span class="badge custom-badge w-auto mb-2 align-self-start">${item.categoria}</span>
          <h5 class="card-title fw-bold">${item.titulo}</h5>
          <p class="card-text fs-5 fw-semibold">${item.cantor}</p>
          <p class="card-text text-$purple-200 flex-grow-1">${item.descricao}</p>
          <a href="${item.link}" class="btn btn-outline-light mt-auto">Ouvir Agora</a>
        </div>
      </div>
    </div>
  `).join("");

  container.innerHTML = cardsHTML;
}

// Executa a renderização quando a página carrega
document.addEventListener("DOMContentLoaded", renderizarPortfolio);