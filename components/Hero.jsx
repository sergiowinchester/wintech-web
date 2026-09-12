export default function Hero() {
  return (
    <section className="w-full max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop pt-space-2xl md:pt-space-4xl pb-space-3xl" id="inicio">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/60 mb-space-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
            </span>
            <span className="font-mono-eyebrow text-mono-eyebrow text-on-surface">Agencia Digital & Automatización WhatsApp</span>
            <span className="text-xs bg-tertiary-fixed px-1.5 py-0.5 rounded text-on-tertiary-fixed font-semibold">Disponibilidad inmediata</span>
          </div>
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-space-md tracking-tight">
            Crea tu presencia web.
          </h1>
          <p className="font-body-lead text-body-lead text-secondary mb-space-xl max-w-2xl">
            Diseñamos landing pages ultrarrápidas y chatbots inteligentes para WhatsApp que capturan leads y atienden a tus clientes las 24 horas del día. Sin fricción ni costos ocultos.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto mb-space-xl">
            <a className="inline-flex justify-center items-center gap-2 bg-primary-container hover:bg-surface-tint text-on-tertiary font-label-btn text-label-btn px-6 py-3.5 rounded-xl border border-primary transition-all duration-150 tactile-shadow hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5" href="#precios">
              <span className="material-symbols-outlined">payments</span>
              <span>Ver Planes y Precios</span>
            </a>
            <a className="inline-flex justify-center items-center gap-2 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-btn text-label-btn px-6 py-3.5 rounded-xl border border-outline transition-all duration-150" href="https://wa.me/5491140442803?text=Hola%20Wintech,%20deseo%20hablar%20con%20un%20asesor" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-tertiary">forum</span>
              <span>Hablar con un Asesor</span>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-space-md pt-space-md border-t border-outline-variant/60 w-full">
            <div className="flex flex-col">
              <span className="font-mono-metric text-mono-metric text-primary-container">48h</span>
              <span className="font-body-sm text-body-sm text-secondary">Setup en tiempo récord</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono-metric text-mono-metric text-tertiary">$0</span>
              <span className="font-body-sm text-body-sm text-secondary">Abono mensual $0</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono-metric text-mono-metric text-on-surface">1:1</span>
              <span className="font-body-sm text-body-sm text-secondary">Soporte directo</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative bg-surface-container-lowest border border-outline-variant p-2 rounded-xl tactile-shadow-lg">
            <img className="w-full h-80 md:h-[420px] object-cover rounded-lg" alt="Creative web development agency team" src="/images/hero-photo.webp" />
            <div className="absolute -bottom-5 -left-4 bg-surface-container-lowest border border-outline-variant p-3.5 rounded-xl tactile-shadow max-w-xs hidden sm:block">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse"></div>
                <span className="font-mono-eyebrow text-xs text-on-surface font-semibold">Bot de WhatsApp Activo</span>
                <span className="text-[10px] text-secondary ml-auto font-mono-eyebrow">Ahora</span>
              </div>
              <p className="text-xs bg-surface-container-low text-on-surface p-2.5 rounded-lg mb-1.5 border border-outline-variant/40">
                "¡Hola! Vi el catálogo online y quiero pedir el modelo Pro en negro."
              </p>
              <div className="text-[11px] bg-tertiary-fixed/30 text-on-tertiary-fixed border border-tertiary-fixed p-2 rounded-lg font-medium flex items-center justify-between">
                <span>Pedido registrado en Google Sheets ✓</span>
                <span className="material-symbols-outlined text-xs text-tertiary">check_circle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
