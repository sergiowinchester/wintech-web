export default function WhatsAppFab() {
  return (
    <aside className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-inverse-surface text-inverse-on-surface text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
        <span>¡Escríbenos por WhatsApp!</span>
      </div>
      <a 
        aria-label="WhatsApp Wintech" 
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full tactile-shadow transition-transform duration-150 active:scale-95 group-hover:-translate-y-1" 
        href="https://wa.me/5491140442803?text=Hola%20Wintech,%20quiero%20información%20sobre%20sus%20servicios" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {/* SVG optimizado y adaptado a JSX */}
        <svg 
          fill="currentColor" 
          width="32px" 
          height="32px" 
          viewBox="0 0 16 16" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
          <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
        </svg>

        {/* Notificación flotante de activo */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary-container border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
}
