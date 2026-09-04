// Dados dos projetos/músicas
const projetos = [
  {
    id: 0,
    titulo: "Álbum - Commedia D'arte",
    categoria: "Indie POP / R&B contemporâneo / POP latino",
    cantor: "Bea Duarte",
    descricao: "Produção completa de mixagem e masterização para o álbum de estreia.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCsGM43TJh1JWo1fvEVSsG_E0UcW-hRqmOnRrZfMdugaP8H2WCneVK70R&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    bio: "Bea Duarte é uma cantora e compositora brasileira emergente na cena indie, destacando-se por harmonias vocais expressivas e pela fusão de ritmos latinos com R&B e POP."
  },
  {
    id: 1,
    titulo: "Álbum - Tell me you love me",
    categoria: "POP / R&B / Soul",
    cantor: "Demi Lovato",
    descricao: "Captação de áudio ao vivo com voz e piano",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdQyVWK0BhDbr8N_OqiIUtgvyV0mDrnw3fK8URvXwmUTk7zxCcMglETo&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    bio: "Demi Lovato é uma aclamada cantora e compositora norte-americana com alcance vocal poderoso, reconhecida globalmente por seus sucessos no POP moderno e R&B soul."
  },
  {
    id: 2,
    titulo: "Single - Candyman",
    categoria: "POP / Jazz/ Blues / Swing",
    cantor: "Christina Aguilera",
    descricao: "Co-produção e edição de bateria e baixo.",
    imagem: "https://i.discogs.com/aCpUjO5BbzGe3qj84tpTr9_nc4FsclmkFnQ3oFD7vn8/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMjU0/NTgtMTI1OTM1NTgy/MS5qcGVn.jpeg",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    bio: "Christina Aguilera é uma cantora e vencedora do Grammy famosa por sua versatilidade e alcance vocal, marcando época no POP e transitando pelo Jazz e Swing vintage."
  },
  {
    id: 3,
    titulo: "Single - Rolling in the Deep",
    categoria: "Soul / Blues / POP / Gospel",
    cantor: "Adele",
    descricao: "Arranjo musical completo e gravação de guitarras acústicas e elétricas.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVAyfSJgBqcXyOV9C3WAspbhCO2J0qRvhckCrOZL2qY1Ej3pHOg7GZNGj&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    bio: "Adele é uma das artistas de maior vendagem no mundo, aclamada por sua voz mezzo-soprano marcante e composições emotivas no estilo Soul, Blues e POP."
  },
  {
    id: 4,
    titulo: "Álbum - Divino",
    categoria: " Rock (alternativo, indie e clássico) / Blues",
    cantor: "Banda - Venere Vai Venlus",
    descricao: "Criação de beats, sintetizadores e design sonoro para música eletrônica.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwJXICYfljSb-eIfV3_il9Ey8C-a4SSbO0CnQkxNPqg&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    bio: "Venere Vai Venlus é um projeto de Rock nacional que mescla a pegada clássica e o rock alternativo a texturas sintetizadas e elementos modernos do Indie."
  },
  {
    id: 5,
    titulo: "Single - Espetáculo Estranho",
    categoria: "MPB / Folk-POP",
    cantor: "ANAVITÓRIA",
    descricao: "Gravação, edição e afinação profissional de vozes para single.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaWOMduh1oJIAfnhdBQ1i1oKnH0X6lkDMAx1uwCIk_g&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    bio: "ANAVITÓRIA é um duo musical brasileiro referência do Folk-POP e MPB, conhecido pelas melodias suaves, poesias do cotidiano e harmonias vocais marcantes."
  },
  {
    id: 6,
    titulo: "Single - Aurora",
    categoria: "POP",
    cantor: "Jão",
    descricao: "Pré-produção, estruturação harmônica e direção artística de projeto musical.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXKGdU7CiN5kmMMoyhSzbWjEFxK6JA_mPlOLObMf3RQ&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    bio: "Jão é um cantor e compositor brasileiro destaque na cena POP contemporânea, famoso por suas apresentações performáticas e narrativas passionais em suas músicas."
  },
  {
    id: 7,
    titulo: "Single - Serenata Existencialista",
    categoria: "Rock (Alternativo e indie)",
    cantor: "O Grilo",
    descricao: "Reamptilficação de instrumentos, mixagem e pós-produção áudio para rock.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvplcaDZPETYBBYD_J4Izyh_6VL0kcRMIwvY5L7ObQQ&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    bio: "O Grilo é uma banda brasileira de Rock Alternativo que mistura letras reflexivas, groove dançante e arranjos criativos com forte influência da brasilidade."
  },
  {
    id: 8,
    titulo: "Single - Circo",
    categoria: "Rock Alternativo",
    cantor: "Banda - Venere Vai Venus",
    descricao: "Restauração de áudio, limpeza de ruídos e masterização para streaming.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStY8gjVn-Z9tzE8so_G9rRcYkWZCN5pw_XO6VQ2r4cUQ&s=10",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    bio: "Venere Vai Venus explora o Rock Alternativo com timbres densos, distorções expressivas e temáticas teatrais envolvidas por um design sonoro marcante."
  }
];

// LÓGICA DO INDEX.HTML (Vitrine de Lançamentos)
function renderizarPortfolio() {
  const container = document.getElementById("portfolio-grid");
  if (!container) return; // Se não estiver na index, interrompe

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
          
          <!-- BOTÕES AQUI NA TELA INICIAL (INDEX) -->
          <div class="d-flex gap-2 mt-auto">
            <a href="player.html?id=${item.id}" class="btn btn-outline-light flex-fill">Ouvir Agora</a>
            <a href="artista.html?cantor=${encodeURIComponent(item.cantor)}" class="btn btn-purple d-flex align-items-center gap-1">
              <i class="bi bi-person-badge"></i> Biografia
            </a>
          </div>
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
  if (!audioElement) return; // Se não estiver no player.html, interrompe

  audio = audioElement;

  const urlParams = new URLSearchParams(window.location.search);
  const idParam = parseInt(urlParams.get("id"));
  
  if (!isNaN(idParam) && idParam >= 0 && idParam < projetos.length) {
    indiceAtual = idParam;
  }

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
  
  // Atualiza o link do botão de Biografia dentro do Player
  const btnBio = document.getElementById("btn-artista-bio");
  if (btnBio) {
    btnBio.href = `artista.html?cantor=${encodeURIComponent(faixa.cantor)}`;
  }

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

// LÓGICA DO FORMULÁRIO DE CONTRATAÇÃO
function inicializarFormulario() {
  const form = document.getElementById("form-contratar");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Solicitação enviada com sucesso!");
    form.reset();
  });
}

// LÓGICA DA TELA DE BIOGRAFIA (artista.html)
function inicializarArtista() {
  const nomeEl = document.getElementById("artista-nome");
  if (!nomeEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const cantorParam = urlParams.get("cantor");

  const artista = projetos.find(p => p.cantor === cantorParam) || projetos[0];

  document.getElementById("artista-foto").src = artista.imagem;
  document.getElementById("artista-nome").innerText = artista.cantor;
  document.getElementById("artista-genero").innerText = artista.categoria;
  document.getElementById("artista-bio").innerText = artista.bio;
}

// Inicialização de acordo com a página
document.addEventListener("DOMContentLoaded", () => {
  renderizarPortfolio();
  inicializarPlayer();
  inicializarFormulario();
  inicializarArtista();
});