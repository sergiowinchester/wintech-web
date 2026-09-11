export default function CtaBanner() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="bg-inverse-surface rounded-xl p-space-xl md:p-space-2xl text-inverse-on-surface flex flex-col md:flex-row items-center justify-between gap-space-lg tactile-shadow-lg">
          <div className="max-w-xl">
            <span className="font-mono-eyebrow text-xs text-primary-container uppercase tracking-wider font-semibold">Despliegue Rápido</span>
            <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface mt-1 mb-2">
              ¿Listo para automatizar la atención de tu negocio?
            </h2>
            <p className="text-body-default text-secondary-fixed-dim">
              Habla directamente con nuestros ingenieros. Te asesoramos sin compromiso sobre cuál plan se adapta a tu flujo comercial.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-surface-tint text-on-tertiary font-label-btn text-label-btn px-6 py-3.5 rounded-xl border border-primary transition-all duration-150 tactile-shadow-sm font-bold" href="https://wa.me/5491100000000?text=Hola%20winweb,%20quiero%20iniciar%20un%20proyecto%20con%20ustedes" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
