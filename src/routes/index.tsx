import { Train, ShieldCheck, Key, MapPin, Calendar, Sparkles } from 'lucide-react';

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* =========================================================================
          EFECTOS DE FONDO: Luces ambientales y textura sutil de viajes
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Luz ambiental verde menta / jade (superior izquierda) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8AA899]/20 rounded-full blur-3xl" />
        {/* Luz ambiental coral suave (inferior derecha) */}
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#D97757]/15 rounded-full blur-3xl" />
        
        {/* Entramado vectorial sutil de rutas y conectividad */}
        <svg
          className="absolute inset-0 w-full h-full stroke-slate-300/40 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="travel-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q 25 25, 50 50 T 100 50"
                fill="none"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle cx="50" cy="50" r="3" fill="#8AA899" className="opacity-40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#travel-pattern)" />
        </svg>
      </div>

      {/* =========================================================================
          HEADER / NAVBAR (Cristal translúcido con Glassmorphism)
         ========================================================================= */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGOTIPO OFICIAL */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/logo-tortola.png"
              alt="Apartamentos Tórtola 10"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* NAVEGACIÓN DERECHA */}
          <nav className="flex items-center gap-4">
            <a
              href="#experiencias"
              className="hidden sm:inline-block text-sm font-medium text-slate-600 hover:text-[#8AA899] transition-colors"
            >
              Experiencias
            </a>
            <a
              href="#apartamentos"
              className="hidden sm:inline-block text-sm font-medium text-slate-600 hover:text-[#8AA899] transition-colors"
            >
              Apartamentos
            </a>
            <a
              href="#reservar"
              className="px-5 py-2.5 rounded-xl bg-[#1E293B] hover:bg-[#D97757] text-white text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
            >
              Reservar Directo
            </a>
          </nav>
        </div>
      </header>

      {/* =========================================================================
          HERO SECTION (Pantalla Principal)
         ========================================================================= */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 text-center">
        
        {/* BADGE / INSIAGNIA DE UBICACIÓN (AVE & COTA CERO) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8AA899]/15 border border-[#8AA899]/30 text-slate-800 text-xs sm:text-sm font-semibold mb-8 shadow-xs backdrop-blur-xs">
          <Train className="w-4 h-4 text-[#8AA899]" />
          <span>A 2 minutos a pie de la Estación de AVE · Acceso cota cero</span>
        </div>

        {/* TÍTULO PRINCIPAL (H1) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1E293B] tracking-tight leading-tight mb-6">
          Tu refugio moderno y confortable en Granada
        </h1>

        {/* SUBTÍTULO (H2) */}
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Apartamentos turísticos a pie de calle (<strong className="text-slate-800 font-semibold">Perla</strong>, <strong className="text-slate-800 font-semibold">Jade</strong> y <strong className="text-slate-800 font-semibold">Coral</strong>) equipados con climatización por aerotermia, entrada autónoma 24/7 y la mejor comunicación para disfrutar de la ciudad.
        </p>

        {/* BOTONES DE ACCIÓN (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#reservar"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1E293B] hover:bg-[#D97757] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            Ver disponibilidad y reservar directo
          </a>
          <a
            href="#apartamentos"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-base font-semibold shadow-xs transition-all duration-200"
          >
            Ver apartamentos y calidades
          </a>
        </div>

        {/* =========================================================================
            TARJETAS HIGHLIGHTS (Puntos Fuertes)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#8AA899]/20 flex items-center justify-center mb-4 text-[#8AA899]">
              <Train className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-800 text-lg mb-1">Junto al AVE</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A solo 2 minutos a pie de la Estación de Ferrocarril. Olvídate de los desplazamientos largos o cargar maletas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#9EB5C2]/20 flex items-center justify-center mb-4 text-[#9EB5C2]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-800 text-lg mb-1">Acceso Cota Cero</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Ubicados directamente a pie de calle. Entrada totalmente accesible sin peldaños ni barreras arquitectónicas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#D97757]/20 flex items-center justify-center mb-4 text-[#D97757]">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-800 text-lg mb-1">Llegada Autónoma 24/7</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Acceso mediante código PIN inteligente. Llega a la hora que quieras con total libertad y flexibilidad.
            </p>
          </div>

        </div>
      </main>

      {/* =========================================================================
          FOOTER
         ========================================================================= */}
      <footer className="relative z-10 border-t border-slate-200/80 bg-white/60 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          <p className="mb-2">© {new Date().getFullYear()} Apartamentos Tórtola 10 · Granada, España</p>
          <p>Confort, aerotermia y máxima accesibilidad a pie de calle.</p>
        </div>
      </footer>

    </div>
  );
}
