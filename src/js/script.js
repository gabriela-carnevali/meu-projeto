// Dados dos projetos/músicas
const projetos = [
  {
    id: 0,
    titulo: "Álbum - Commedia D'arte",
    categoria: "Indie POP / R&B contemporâneo / POP latino",
    cantor: "Bea Duarte",
    descricao: "Produção completa de mixagem e masterização para o álbum de estreia.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCsGM43TJh1JWo1fvEVSsG_E0UcW-hRqmOnRrZfMdugaP8H2WCneVK70R&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 1,
    titulo: "Álbum - Tell me you love me",
    categoria: "POP / R&B / Soul",
    cantor: "Demi Lovato",
    descricao: "Captação de áudio ao vivo com voz e piano",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdQyVWK0BhDbr8N_OqiIUtgvyV0mDrnw3fK8URvXwmUTk7zxCcMglETo&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 2,
    titulo: "Single - Candyman",
    categoria: "POP / Jazz/ Blues / Swing",
    cantor: "Christina Aguilera",
    descricao: "Co-produção e edição de bateria e baixo.",
    imagem: "https://i.discogs.com/aCpUjO5BbzGe3qj84tpTr9_nc4FsclmkFnQ3oFD7vn8/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMjU0/NTgtMTI1OTM1NTgy/MS5qcGVn.jpeg",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

// LÓGICA DO INDEX.HTML (Vitrine de Lançamentos)
function renderizarPortfolio() {
  const container = document.getElementById("portfolio-grid");
  if (!container) return; // Se não estiver na index, interrompe esta função

  const cardsHTML = projetos
    .map(
      (item) => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 custom-card text-white">
        <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
        <div class="card-body d-flex flex-column">
          <span class="badge custom-badge w-auto mb-2 align-self-start">${item.categoria}</span>
          <h5 class="card-title fw-bold">${item.titulo}</h5>
          <p class="card-text fs-5 mb-0 fw-semibold">${item.cantor}</p>
          <p class="card-text flex-grow-1" style="color: #b589ceb8;">${item.descricao}</p>
          <a href="player.html?id=${item.id}" class="btn btn-outline-light mt-auto">Ouvir Agora</a>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  container.innerHTML = cardsHTML;
}

// LÓGICA DO PLAYER.HTML
let indiceAtual = 0;
let audio = null;

function inicializarPlayer() {
  const audioElement = document.getElementById("audio-element");
  if (!audioElement) return; // Se não estiver na página player.html, interrompe esta função

  audio = audioElement;

  // Pega o ID passado via parâmetro na URL (?id=0)
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = parseInt(urlParams.get("id"));
  
  if (!isNaN(idParam) && idParam >= 0 && idParam < projetos.length) {
    indiceAtual = idParam;
  }

  // Configuração dos Eventos dos Botões
  const btnPlayPause = document.getElementById("btn-play-pause");
  btnPlayPause.addEventListener("click", () => {
    if (audio.paused) {
      tocarAudio();
    } else {
      pausarAudio();
    }
  });

  document.getElementById("btn-next").addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % projetos.length;
    carregarFaixa(indiceAtual);
  });

  document.getElementById("btn-prev").addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + projetos.length) % projetos.length;
    carregarFaixa(indiceAtual);
  });

  document.getElementById("volume-control").addEventListener("input", (e) => {
    audio.volume = e.target.value;
  });

  carregarFaixa(indiceAtual);
}

function carregarFaixa(index) {
  indiceAtual = index;
  const faixa = projetos[indiceAtual];

  document.getElementById("player-cover").src = faixa.imagem;
  document.getElementById("player-title").innerText = faixa.titulo;
  document.getElementById("player-artist").innerText = faixa.cantor;
  document.getElementById("player-category").innerText = faixa.categoria;
  audio.src = faixa.audioSrc;

  renderizarPlaylistLateral();
  tocarAudio();
}

function tocarAudio() {
  audio.play();
  document.getElementById("play-icon").className = "bi bi-pause-fill";
}

function pausarAudio() {
  audio.pause();
  document.getElementById("play-icon").className = "bi bi-play-fill";
}

function renderizarPlaylistLateral() {
  const container = document.getElementById("playlist-container");
  if (!container) return;

  container.innerHTML = projetos
    .map(
      (item, index) => `
    <button 
      onclick="carregarFaixa(${index})" 
      class="list-group-item list-group-item-action playlist-item d-flex align-items-center gap-3 ${index === indiceAtual ? 'active' : ''}"
    >
      <img src="${item.imagem}" width="40" height="40" class="rounded object-fit-cover" alt="${item.titulo}">
      <div class="text-truncate">
        <div class="fw-bold text-truncate">${item.titulo}</div>
        <small class="opacity-75">${item.cantor}</small>
      </div>
    </button>
  `
    )
    .join("");
}

// Inicialização de acordo com a página carregada
document.addEventListener("DOMContentLoaded", () => {
  renderizarPortfolio();
  inicializarPlayer();
});