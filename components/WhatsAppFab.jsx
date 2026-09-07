export default function WhatsAppFab() {
  return (
    <aside className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-inverse-surface text-inverse-on-surface text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
        <span>¡Escríbenos por WhatsApp!</span>
      </div>
      <a aria-label="WhatsApp Wintech" className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full tactile-shadow transition-transform duration-150 active:scale-95 group-hover:-translate-y-1" href="https://wa.me/5491100000000?text=Hola%20Wintech,%20quiero%20información%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary-container border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
