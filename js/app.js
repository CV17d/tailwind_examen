/**
 * ==============================================================================
 * LOGICA DE APLICACION - GAMING DASHBOARD
 * Datos y renderizado idénticos al mockup de la evaluación
 * ==============================================================================
 */

// Helper para generar las 5 estrellas vacías con contorno naranja del mockup
const renderStars = (sizeClass = 'w-3.5 h-3.5') => `
  <div class="flex items-center gap-1 text-[#ff8c42] leading-none">
    <svg class="${sizeClass} fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg class="${sizeClass} fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg class="${sizeClass} fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg class="${sizeClass} fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg class="${sizeClass} fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  </div>
`;

// 1. ESTADO Y FUENTE DE DATOS
const gamesData = {
  popular: [
    {
      id: 'spiderman',
      title: 'Spider Man',
      category: 'Action • Adventure',
      image: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?w=500&auto=format&fit=crop&q=80',
      badge: 'Popular',
      rating: '4.8',
      size: '42.0 GB',
      downloads: '3.5M',
      description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man in an immersive open-world New York.'
    },
    {
      id: 'cod',
      title: 'Call of Duty',
      category: 'Action • Adventure',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=80',
      badge: 'Popular',
      rating: '4.7',
      size: '85.4 GB',
      downloads: '8.1M',
      description: 'Welcome to Warzone, the massive combat arena. Drop in, armor up, loot for rewards and battle your way to the top in intense tactical warfare.'
    },
    {
      id: 'assassins',
      title: "Assassin's Creed",
      category: 'Action • Adventure',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80',
      badge: 'Popular',
      rating: '4.6',
      size: '56.0 GB',
      downloads: '2.8M',
      description: "Become an iconic warrior of shadow. Experience the interconnected stories of history's greatest brotherhood through rich open worlds and precision stealth combat."
    },
    {
      id: 'cod-asphalt',
      title: 'Call of Duty',
      category: 'Action • Adventure',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=80',
      badge: null,
      rating: '4.9',
      size: '18.2 GB',
      downloads: '5.2M',
      description: 'High octane action adventure experience bringing competitive racing, explosive gunplay, and intense multiplayer thrills.'
    }
  ],

  forYou: [
    {
      id: 'asphalt-racing',
      title: 'Asphalt Racing',
      category: 'Racing',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=140&auto=format&fit=crop&q=80',
      actionType: 'free',
      actionLabel: 'Free'
    },
    {
      id: 'green-snake',
      title: 'Green Snake',
      category: 'Action',
      image: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=140&auto=format&fit=crop&q=80',
      actionType: 'price',
      actionLabel: '$100.00'
    },
    {
      id: 'legend-alkali',
      title: 'Ledgend of Alkali',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=140&auto=format&fit=crop&q=80',
      actionType: 'installed',
      actionLabel: 'Installed'
    },
    {
      id: 'reckoning',
      title: 'Reckoning',
      category: 'Action',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=140&auto=format&fit=crop&q=80',
      actionType: 'download',
      actionLabel: 'Download'
    }
  ],

  liveGames: [
    {
      id: 'live-1',
      title: 'Speedy Traffic',
      viewers: '14.5k Viewers',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 'live-2',
      title: 'Mortal Kombat',
      viewers: '14.5k Viewers',
      image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 'live-3',
      title: 'Living Dead',
      viewers: '14.5k Viewers',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 'live-4',
      title: 'Warriors',
      viewers: '14.5k Viewers',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&auto=format&fit=crop&q=80'
    }
  ]
};

// 2. REFERENCIAS AL DOM
const elements = {
  popularGrid: document.getElementById('popular-games-grid'),
  forYouGrid: document.getElementById('for-you-grid'),
  liveGamesList: document.getElementById('live-games-list'),
  searchInput: document.getElementById('search-input'),
  detailImage: document.getElementById('detail-image'),
  detailTitle: document.getElementById('detail-title'),
  detailCategory: document.getElementById('detail-category'),
  detailDesc: document.getElementById('detail-desc'),
  detailRating: document.getElementById('detail-rating'),
  detailSize: document.getElementById('detail-size'),
  detailDownloads: document.getElementById('detail-downloads')
};

// 3. RENDERIZADO

/**
 * Renderiza la sección "Most Popular Games" idéntico al mockup
 */
function renderPopularGames(gamesList = gamesData.popular) {
  if (!elements.popularGrid) return;

  elements.popularGrid.innerHTML = gamesList.map(game => `
    <div 
      onclick="selectGame('${game.id}')"
      class="group relative h-80 sm:h-88 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <img 
        src="${game.image}" 
        alt="${game.title}" 
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      >
      ${game.badge ? `
        <span class="absolute top-4 right-4 bg-[#fff4ee] text-[#ff6922] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-sm">
          ${game.badge}
        </span>
      ` : ''}
      
      <!-- Overlay degradado oscuro para texto perfectamente nítido -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-5.5 text-white">
        <h3 class="font-extrabold text-base sm:text-lg leading-tight text-white mb-1">${game.title}</h3>
        <p class="text-xs sm:text-sm text-slate-200 font-medium mb-3">${game.category}</p>
        
        <div class="flex items-center justify-between">
          ${renderStars('w-3.5 h-3.5')}
          <button 
            title="Descargar"
            class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/20 backdrop-blur-md hover:bg-[#ff6922] flex items-center justify-center transition border border-white/20"
          >
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

/**
 * Renderiza la sección "For You" con las tarjetas blancas 2x2
 */
function renderForYouGames() {
  if (!elements.forYouGrid) return;

  elements.forYouGrid.innerHTML = gamesData.forYou.map(game => {
    let buttonHtml = '';
    
    if (game.actionType === 'installed') {
      buttonHtml = `
        <button class="px-6 sm:px-7 py-2.5 rounded-xl border border-slate-200 text-slate-400 text-xs sm:text-sm font-medium bg-slate-50 cursor-default">
          Installed
        </button>
      `;
    } else {
      buttonHtml = `
        <button class="px-6 sm:px-7 py-2.5 rounded-xl border border-[#ff6922] text-[#ff6922] hover:bg-[#ff6922] hover:text-white text-xs sm:text-sm font-bold transition">
          ${game.actionLabel}
        </button>
      `;
    }

    return `
      <div class="flex items-center justify-between gap-4 p-2 rounded-2xl hover:bg-slate-50/60 transition">
        <div class="flex items-center gap-4">
          <img src="${game.image}" alt="${game.title}" class="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover shadow-sm">
          <div>
            <h4 class="font-bold text-base sm:text-lg text-slate-800 leading-tight">${game.title}</h4>
            <p class="text-xs sm:text-sm text-slate-400 font-normal mb-1.5">${game.category}</p>
            ${renderStars('w-3.5 h-3.5')}
          </div>
        </div>
        ${buttonHtml}
      </div>
    `;
  }).join('');
}

/**
 * Renderiza la sección "Live Games" con los tags de cámara de video
 */
function renderLiveGames() {
  if (!elements.liveGamesList) return;

  elements.liveGamesList.innerHTML = gamesData.liveGames.map(stream => `
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-3.5">
        <div class="relative">
          <img src="${stream.image}" alt="${stream.title}" class="w-12 h-12 rounded-2xl object-cover shadow-sm">
          <span class="absolute -bottom-1 -right-1 bg-[#ff7a22] text-white rounded-md p-1 flex items-center justify-center ring-2 ring-white">
            <svg class="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
          </span>
        </div>
        <div>
          <h4 class="font-bold text-sm text-slate-800 leading-snug">${stream.title}</h4>
          <p class="text-xs text-slate-400 font-medium">${stream.viewers}</p>
        </div>
      </div>
      <button class="px-5 py-2 rounded-xl border border-[#ff6922] text-[#ff6922] hover:bg-[#ff6922] hover:text-white text-xs font-semibold transition">
        Join
      </button>
    </div>
  `).join('');
}

/**
 * Selección interactiva de juego para actualizar la tarjeta de la derecha
 */
function selectGame(gameId) {
  const game = gamesData.popular.find(g => g.id === gameId);
  if (!game) return;

  elements.detailImage.src = game.image;
  elements.detailTitle.innerText = game.title;
  elements.detailCategory.innerText = game.category;
  elements.detailDesc.innerText = game.description;
  elements.detailRating.innerHTML = `${game.rating}<span class="text-slate-400 text-xs font-normal">/5</span>`;
  elements.detailSize.innerHTML = `${game.size.split(' ')[0]} <span class="text-xs font-normal text-slate-400">GB</span>`;
  elements.detailDownloads.innerHTML = `${game.downloads.replace('M', '')} <span class="text-xs font-normal text-slate-400">Million</span>`;
}

/**
 * Buscador en tiempo real
 */
function setupSearch() {
  if (!elements.searchInput) return;

  elements.searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = gamesData.popular.filter(game => 
      game.title.toLowerCase().includes(term) || 
      game.category.toLowerCase().includes(term)
    );
    renderPopularGames(filtered);
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  renderPopularGames();
  renderForYouGames();
  renderLiveGames();
  setupSearch();
  lucide.createIcons();
});
