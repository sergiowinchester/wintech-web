export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
      <div className="flex justify-between items-center w-full max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop h-20">
        <a className="flex items-center gap-space-xs text-headline-md font-headline-md font-extrabold text-on-surface dark:text-inverse-on-surface tracking-tight group" href="#inicio">
          <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-tertiary shadow-sm transition-transform group-hover:scale-105">
          <span className="material-symbols-outlined">terminal</span>          
          </div>
          <span>Wintech</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-primary dark:text-primary-container font-label-btn border-b-2 border-primary dark:border-primary-container pb-1 transition-all duration-150 active:translate-y-px" href="#inicio">Inicio</a>
          <a className="text-secondary dark:text-secondary-fixed-dim font-label-btn transition-colors hover:text-primary dark:hover:text-primary-fixed-dim" href="#precios">Precios</a>
          <a className="text-secondary dark:text-secondary-fixed-dim font-label-btn transition-colors hover:text-primary dark:hover:text-primary-fixed-dim" href="#beneficios">Beneficios</a>
          <a className="text-secondary dark:text-secondary-fixed-dim font-label-btn transition-colors hover:text-primary dark:hover:text-primary-fixed-dim" href="#casos">Casos de Éxito</a>
        </nav>
        <div className="flex items-center gap-space-sm">
          <a className="hidden sm:inline-flex items-center gap-2 bg-primary-container hover:bg-surface-tint text-on-tertiary font-label-btn text-label-btn px-5 py-2.5 rounded-xl border border-primary transition-all duration-150 tactile-shadow-sm active:translate-x-0.5 active:translate-y-0.5" href="https://wa.me/5491100000000?text=Hola%20Wintech,%20quiero%20cotizar%20un%20proyecto" rel="noopener noreferrer" target="_blank">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            <span>Cotizar Ahora</span>
          </a>
          <a className="sm:hidden inline-flex items-center justify-center p-2 rounded-xl bg-surface-container-low text-on-surface" href="#precios">
            <span className="material-symbols-outlined">menu</span>
          </a>
        </div>
      </div>
    </header>
  );
}