<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boardto - Reporting Dashboard</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Fonts Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
          },
          colors: {
            primary: {
              DEFAULT: '#00b4d8',
              hover: '#0096c7',
              light: '#e0f7fa',
              cyan: '#06b6d4',
            },
            boardto: {
              bg: '#f8fafc',
              cardBg: '#f2f4f8',
              sidebarText: '#64748b',
              sidebarActive: '#00b4d8',
              badgeBg: '#ffffff',
            }
          },
          boxShadow: {
            'card': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 4px 10px -2px rgba(0, 0, 0, 0.02)',
            'float-icon': '0 8px 18px -3px rgba(0, 0, 0, 0.12)',
            'btn-glow': '0 4px 14px rgba(0, 180, 216, 0.35)',
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    }
    /* Estilo sutil de scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }
  </style>
</head>

<body class="bg-[#f3f5f9] min-h-screen text-slate-800 antialiased flex flex-col selection:bg-cyan-500 selection:text-white">

  <!-- ======================================================================= -->
  <!-- BARRA SUPERIOR (HEADER)                                                -->
  <!-- ======================================================================= -->
  <header class="w-full bg-[#f3f5f9] px-6 lg:px-10 py-4 flex items-center justify-between gap-4 z-20">
    <!-- Logo Boardto -->
    <div class="flex items-center gap-3 w-64 shrink-0">
      <div class="w-8 h-8 rounded-full bg-[#00b4d8] flex items-center justify-center text-white shadow-sm">
        <!-- Estrella / Flor de 5 puntas como en el logo -->
        <svg class="w-4 h-4 fill-white text-white" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
      <span class="text-xl font-extrabold tracking-tight text-slate-800">Boardto</span>
    </div>

    <!-- Barra de búsqueda -->
    <div class="flex-1 max-w-xl hidden md:flex items-center">
      <div class="relative w-full max-w-sm">
        <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
        <input 
          type="text" 
          placeholder="Search ..." 
          class="w-full bg-transparent border-none pl-10 pr-4 py-2 text-sm text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-0"
        />
      </div>
    </div>

    <!-- Perfil y Notificaciones a la derecha -->
    <div class="flex items-center gap-6 ml-auto">
      <!-- Campana de Notificación con badge "1" -->
      <button class="relative text-slate-600 hover:text-slate-900 transition p-1.5 rounded-full hover:bg-slate-200/50" title="Notifications">
        <i data-lucide="bell" class="w-5 h-5"></i>
        <span class="absolute 0 top-0.5 right-0.5 w-3.5 h-3.5 bg-[#ff6b6b] text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#f3f5f9]">
          1
        </span>
      </button>

      <!-- Perfil Usuario: Augusta Ryan -->
      <div class="flex items-center gap-3 pl-2">
        <div class="relative">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" 
            alt="Augusta Ryan" 
            class="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
          />
        </div>
        <div class="hidden sm:flex flex-col text-left leading-tight">
          <span class="text-sm font-bold text-slate-800 tracking-tight">Augusta Ryan</span>
          <span class="text-xs text-slate-400 font-medium">Director</span>
        </div>
      </div>
    </div>
  </header>

  <!-- ======================================================================= -->
  <!-- CONTENEDOR PRINCIPAL: SIDEBAR + PANEL PRINCIPAL                         -->
  <!-- ======================================================================= -->
  <div class="flex-1 flex flex-col md:flex-row px-4 md:px-8 pb-8 gap-4 overflow-hidden">
    
    <!-- ===================================================================== -->
    <!-- SIDEBAR LATERAL IZQUIERDO                                             -->
    <!-- ===================================================================== -->
    <aside class="w-full md:w-60 shrink-0 flex flex-col justify-between py-4 pr-3">
      <nav class="flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        
        <!-- 1. Boards -->
        <a href="#" class="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition text-sm font-medium">
          <i data-lucide="layout-grid" class="w-5 h-5 text-slate-400"></i>
          <span class="whitespace-nowrap">Boards</span>
        </a>

        <!-- 2. Plan Schdule -->
        <a href="#" class="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition text-sm font-medium">
          <i data-lucide="calendar" class="w-5 h-5 text-slate-400"></i>
          <span class="whitespace-nowrap">Plan Schdule</span>
        </a>

        <!-- 3. Reporting (ACTIVO: Píldora Celeste Turquesa con texto blanco) -->
        <a href="#" class="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#00b4d8] text-white font-semibold text-sm shadow-btn-glow transition hover:bg-[#0096c7]">
          <i data-lucide="file-text" class="w-5 h-5 text-white"></i>
          <span class="whitespace-nowrap">Reporting</span>
        </a>

        <!-- 4. Messages -->
        <a href="#" class="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition text-sm font-medium">
          <i data-lucide="message-square" class="w-5 h-5 text-slate-400"></i>
          <span class="whitespace-nowrap">Messages</span>
        </a>

        <!-- 5. Team Member -->
        <a href="#" class="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition text-sm font-medium">
          <i data-lucide="users" class="w-5 h-5 text-slate-400"></i>
          <span class="whitespace-nowrap">Team Member</span>
        </a>

        <!-- 6. Tools Plugin -->
        <a href="#" class="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition text-sm font-medium">
          <i data-lucide="globe" class="w-5 h-5 text-slate-400"></i>
          <span class="whitespace-nowrap">Tools Plugin</span>
        </a>

        <!-- 7. Roadmap -->
        <a href="#" class="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition text-sm font-medium">
          <i data-lucide="network" class="w-5 h-5 text-slate-400"></i>
          <span class="whitespace-nowrap">Roadmap</span>
        </a>

        <!-- 8. Setting -->
        <a href="#" class="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition text-sm font-medium">
          <i data-lucide="sliders" class="w-5 h-5 text-slate-400"></i>
          <span class="whitespace-nowrap">Setting</span>
        </a>
      </nav>

      <!-- Logout al fondo -->
      <div class="pt-6 mt-auto">
        <a href="#" class="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-500 hover:text-red-500 hover:bg-red-50 transition text-sm font-medium">
          <i data-lucide="log-out" class="w-5 h-5 text-slate-400 group-hover:text-red-500"></i>
          <span>Logout</span>
        </a>
      </div>
    </aside>

    <!-- ===================================================================== -->
    <!-- PANEL PRINCIPAL (CARD CONTENEDOR REDONDEADO CON BORDES SUAVES)        -->
    <!-- ===================================================================== -->
    <main class="flex-1 bg-[#eaeff5] rounded-[36px] p-6 lg:p-10 flex flex-col shadow-inner overflow-y-auto">
      
      <!-- Titular de Sección y Botón Crear Proyecto -->
      <div class="flex items-start justify-between mb-8">
        <div>
          <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Reporting</h1>
          <p class="text-xs sm:text-sm text-slate-400 mt-1 font-medium">All project in current month</p>
        </div>

        <!-- Botón '+' Celeste Superior Derecho -->
        <button class="w-11 h-11 rounded-2xl bg-[#00b4d8] hover:bg-[#0096c7] text-white flex items-center justify-center shadow-btn-glow transition hover:scale-105 active:scale-95">
          <i data-lucide="plus" class="w-5 h-5 stroke-[2.5]"></i>
        </button>
      </div>

      <!-- Barra de Filtros (All, Started, Approval, Complated) y Controles de Vista -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-10">
        
        <!-- Pestañas de estado -->
        <div class="flex items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600 flex-wrap">
          
          <!-- Filtro All -->
          <div class="flex items-center gap-2 cursor-pointer group">
            <span class="text-slate-800 font-semibold group-hover:text-[#00b4d8] transition">All</span>
            <span class="px-2.5 py-0.5 rounded-full border border-[#00b4d8] text-[#00b4d8] text-xs font-bold bg-[#e0f7fa]/60">50</span>
          </div>

          <!-- Filtro Started -->
          <div class="flex items-center gap-2 cursor-pointer group">
            <span class="text-slate-500 group-hover:text-slate-900 transition">Started</span>
            <span class="px-2.5 py-0.5 rounded-full bg-white text-slate-500 text-xs font-semibold shadow-xs">20</span>
          </div>

          <!-- Filtro Approval -->
          <div class="flex items-center gap-2 cursor-pointer group">
            <span class="text-slate-500 group-hover:text-slate-900 transition">Approval</span>
            <span class="px-2.5 py-0.5 rounded-full bg-white text-slate-500 text-xs font-semibold shadow-xs">15</span>
          </div>

          <!-- Filtro Complated -->
          <div class="flex items-center gap-2 cursor-pointer group">
            <span class="text-slate-500 group-hover:text-slate-900 transition">Complated</span>
            <span class="px-2.5 py-0.5 rounded-full bg-white text-slate-500 text-xs font-semibold shadow-xs">34</span>
          </div>

        </div>

        <!-- Controles a la derecha: More, Grid view, List view -->
        <div class="flex items-center gap-2.5">
          <!-- Botón More -->
          <button class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-600 shadow-sm border border-slate-200/60 transition">
            <i data-lucide="sliders-horizontal" class="w-3.5 h-3.5 text-slate-400"></i>
            <span>More</span>
          </button>

          <!-- Botón Vista Tablero / Grid -->
          <button class="w-9 h-9 bg-white hover:bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 shadow-sm border border-slate-200/60 transition">
            <i data-lucide="grid" class="w-4 h-4"></i>
          </button>

          <!-- Botón Vista Lista / Columnas (Activo Celeste) -->
          <button class="w-9 h-9 bg-[#00b4d8] text-white rounded-xl flex items-center justify-center shadow-btn-glow transition hover:bg-[#0096c7]">
            <i data-lucide="align-justify" class="w-4 h-4"></i>
          </button>
        </div>

      </div>

      <!-- ===================================================================== -->
      <!-- GRID DE TARJETAS DE PROYECTO (4 Columnas x 2 Filas)                   -->
      <!-- ===================================================================== -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">

        <!-- ==================== TARJETA 1: App Development ==================== -->
        <div class="relative bg-white rounded-[30px] pt-10 pb-6 px-6 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <!-- Icono Flotante Superior (Rosa / Magenta) -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#f43f8e] text-white flex items-center justify-center shadow-float-icon group-hover:scale-110 transition-transform">
            <i data-lucide="smartphone" class="w-6 h-6"></i>
          </div>

          <!-- Título y Detalles del Proyecto -->
          <div class="text-center mt-2">
            <h3 class="font-bold text-slate-800 text-lg tracking-tight">App Development</h3>
            
            <div class="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
              <i data-lucide="target" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Marketing Team</span>
            </div>

            <div class="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>1 Weeks Left</span>
            </div>
          </div>

          <!-- Separador sutil o espacio -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 block mb-2">Team Member</span>
              <div class="flex items-center -space-x-2">
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[11px] font-semibold text-slate-400 block mb-1">Progress</span>
              <span class="text-sm font-bold text-slate-800">34%</span>
            </div>
          </div>
        </div>

        <!-- ==================== TARJETA 2: Web Design ==================== -->
        <div class="relative bg-white rounded-[30px] pt-10 pb-6 px-6 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <!-- Icono Flotante Superior (Turquesa / Esmeralda) -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-float-icon group-hover:scale-110 transition-transform">
            <i data-lucide="laptop" class="w-6 h-6"></i>
          </div>

          <!-- Título y Detalles del Proyecto -->
          <div class="text-center mt-2">
            <h3 class="font-bold text-slate-800 text-lg tracking-tight">Web Design</h3>
            
            <div class="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
              <i data-lucide="target" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Core UI Team</span>
            </div>

            <div class="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>3 Weeks Left</span>
            </div>
          </div>

          <!-- Footer de Tarjeta -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 block mb-2">Team Member</span>
              <div class="flex items-center -space-x-2">
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[11px] font-semibold text-slate-400 block mb-1">Progress</span>
              <span class="text-sm font-bold text-slate-800">76%</span>
            </div>
          </div>
        </div>

        <!-- ==================== TARJETA 3: Landing Page ==================== -->
        <div class="relative bg-white rounded-[30px] pt-10 pb-6 px-6 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <!-- Icono Flotante Superior (Azul Océano) -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shadow-float-icon group-hover:scale-110 transition-transform">
            <i data-lucide="layout" class="w-6 h-6"></i>
          </div>

          <!-- Título y Detalles del Proyecto -->
          <div class="text-center mt-2">
            <h3 class="font-bold text-slate-800 text-lg tracking-tight">Landing Page</h3>
            
            <div class="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
              <i data-lucide="target" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Marketing Team</span>
            </div>

            <div class="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>2 Days Left</span>
            </div>
          </div>

          <!-- Footer de Tarjeta -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 block mb-2">Team Member</span>
              <div class="flex items-center -space-x-2">
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[11px] font-semibold text-slate-400 block mb-1">Progress</span>
              <span class="text-sm font-bold text-slate-800">4%</span>
            </div>
          </div>
        </div>

        <!-- ==================== TARJETA 4: Business Compare ==================== -->
        <div class="relative bg-white rounded-[30px] pt-10 pb-6 px-6 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <!-- Icono Flotante Superior (Naranja Cálido) -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-float-icon group-hover:scale-110 transition-transform">
            <i data-lucide="pie-chart" class="w-6 h-6"></i>
          </div>

          <!-- Título y Detalles del Proyecto -->
          <div class="text-center mt-2">
            <h3 class="font-bold text-slate-800 text-lg tracking-tight">Business Compare</h3>
            
            <div class="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
              <i data-lucide="target" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Marketing Team</span>
            </div>

            <div class="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>1 Month Left</span>
            </div>
          </div>

          <!-- Footer de Tarjeta -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 block mb-2">Team Member</span>
              <div class="flex items-center -space-x-2">
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[11px] font-semibold text-slate-400 block mb-1">Progress</span>
              <span class="text-sm font-bold text-slate-800">90%</span>
            </div>
          </div>
        </div>

        <!-- ==================== TARJETA 5: Comerce Checkout ==================== -->
        <div class="relative bg-white rounded-[30px] pt-10 pb-6 px-6 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <!-- Icono Flotante Superior (Púrpura / Lila) -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#a855f7] text-white flex items-center justify-center shadow-float-icon group-hover:scale-110 transition-transform">
            <i data-lucide="credit-card" class="w-6 h-6"></i>
          </div>

          <!-- Título y Detalles del Proyecto -->
          <div class="text-center mt-2">
            <h3 class="font-bold text-slate-800 text-lg tracking-tight">Comerce Checkout</h3>
            
            <div class="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
              <i data-lucide="target" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Order Process Team</span>
            </div>

            <div class="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>3 Weeks Left</span>
            </div>
          </div>

          <!-- Footer de Tarjeta -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 block mb-2">Team Member</span>
              <div class="flex items-center -space-x-2">
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[11px] font-semibold text-slate-400 block mb-1">Progress</span>
              <span class="text-sm font-bold text-slate-800">65%</span>
            </div>
          </div>
        </div>

        <!-- ==================== TARJETA 6: Data Staging ==================== -->
        <div class="relative bg-white rounded-[30px] pt-10 pb-6 px-6 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <!-- Icono Flotante Superior (Ámbar / Naranja Servidor) -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-float-icon group-hover:scale-110 transition-transform">
            <i data-lucide="server" class="w-6 h-6"></i>
          </div>

          <!-- Título y Detalles del Proyecto -->
          <div class="text-center mt-2">
            <h3 class="font-bold text-slate-800 text-lg tracking-tight">Data Staging</h3>
            
            <div class="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
              <i data-lucide="target" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Core Data Team</span>
            </div>

            <div class="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>2 Month Left</span>
            </div>
          </div>

          <!-- Footer de Tarjeta -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 block mb-2">Team Member</span>
              <div class="flex items-center -space-x-2">
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[11px] font-semibold text-slate-400 block mb-1">Progress</span>
              <span class="text-sm font-bold text-slate-800">96%</span>
            </div>
          </div>
        </div>

        <!-- ==================== TARJETA 7: Campaign Store ==================== -->
        <div class="relative bg-white rounded-[30px] pt-10 pb-6 px-6 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <!-- Icono Flotante Superior (Azul Cielo / Video) -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#38bdf8] text-white flex items-center justify-center shadow-float-icon group-hover:scale-110 transition-transform">
            <i data-lucide="video" class="w-6 h-6"></i>
          </div>

          <!-- Título y Detalles del Proyecto -->
          <div class="text-center mt-2">
            <h3 class="font-bold text-slate-800 text-lg tracking-tight">Campaign Store</h3>
            
            <div class="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
              <i data-lucide="target" class="w-3.5 h-3.5 text-slate-400"></i>
              <span class="truncate max-w-[180px]">Internal Communication</span>
            </div>

            <div class="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>11 Days Left</span>
            </div>
          </div>

          <!-- Footer de Tarjeta -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 block mb-2">Team Member</span>
              <div class="flex items-center -space-x-2">
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[11px] font-semibold text-slate-400 block mb-1">Progress</span>
              <span class="text-sm font-bold text-slate-800">24%</span>
            </div>
          </div>
        </div>

        <!-- ==================== TARJETA 8: Acquisition Mitra ==================== -->
        <div class="relative bg-white rounded-[30px] pt-10 pb-6 px-6 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <!-- Icono Flotante Superior (Fucsia / Magenta Soporte) -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#ec4899] text-white flex items-center justify-center shadow-float-icon group-hover:scale-110 transition-transform">
            <i data-lucide="headphones" class="w-6 h-6"></i>
          </div>

          <!-- Título y Detalles del Proyecto -->
          <div class="text-center mt-2">
            <h3 class="font-bold text-slate-800 text-lg tracking-tight">Acquisition Mitra</h3>
            
            <div class="flex items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-400 font-medium">
              <i data-lucide="target" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Merchant team</span>
            </div>

            <div class="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-slate-400 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>1 Weeks Left</span>
            </div>
          </div>

          <!-- Footer de Tarjeta -->
          <div class="mt-8 pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 block mb-2">Team Member</span>
              <div class="flex items-center -space-x-2">
                <img class="w-7 h-7 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80" alt="Member" />
                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[11px] font-semibold text-slate-400 block mb-1">Progress</span>
              <span class="text-sm font-bold text-slate-800">70%</span>
            </div>
          </div>
        </div>

      </div>

    </main>
  </div>
