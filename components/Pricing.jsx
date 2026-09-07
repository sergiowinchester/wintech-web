export default function Pricing() {
  return (
    <section className="w-full bg-surface-container-low/60 border-y border-outline-variant/60 py-space-3xl md:py-space-4xl" id="precios">
      <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-mono-eyebrow text-mono-eyebrow text-primary uppercase tracking-wider">Tarifas Transparentes</span>
          <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mt-1 mb-space-xs">
            Planes claros, transparentes y sin sorpresas
          </h2>
          <p className="font-body-lead text-body-lead text-secondary">
            Mantenimiento mensual gratis en todos los planes. Un único pago de setup inicial y tu negocio operativo 24/7.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
          {/* Plan Base */}
          <div className="flex flex-col justify-between bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg transition-all hover:border-outline">
            <div>
              <div className="flex justify-between items-center mb-space-sm">
                <span className="font-mono-eyebrow text-xs bg-surface-container-low px-2.5 py-1 rounded text-secondary font-semibold">Presencia</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Plan Base</h3>
              <p className="text-body-sm font-body-sm text-secondary mb-space-md">Ideal para validar presencia digital rápida con canal directo de respuesta automatizada.</p>
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/60 mb-space-md">
                <div className="text-xs text-secondary font-mono-eyebrow">Setup Inicial (Única vez)</div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-mono-metric text-mono-metric text-on-surface font-extrabold">$60.000</span>
                  <span className="text-xs font-mono-eyebrow text-secondary">pesos</span>
                </div>
                <div className="mt-2 pt-2 border-t border-outline-variant/40 flex justify-between items-center text-xs">
                  <span className="text-secondary font-mono-eyebrow">Abono Mensual:</span>
                  <span className="text-tertiary font-bold font-mono-eyebrow bg-tertiary-fixed/30 px-2 py-0.5 rounded">GRATIS ($0/mes)</span>
                </div>
              </div>
              <div className="space-y-space-xs mb-space-lg">
                <p className="text-xs font-semibold text-on-surface uppercase tracking-wide font-mono-eyebrow mb-2">Entregables Incluidos:</p>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Landing page estática</strong> (One-page optimizada para conversión móvil).</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Bot estático de opciones</strong> numeradas (1, 2, 3) para WhatsApp.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Hosting básico</strong> y certificado SSL de seguridad incluido.</span>
                </div>
              </div>
            </div>
            <a className="w-full text-center bg-surface-container-low hover:bg-surface-container text-on-surface font-label-btn text-label-btn py-3 rounded-xl border border-outline transition-colors" href="https://wa.me/5491100000000?text=Hola%20Wintech,%20quiero%20contratar%20el%20Plan%20Base" target="_blank" rel="noopener noreferrer">
              Elegir Plan Base
            </a>
          </div>

          {/* Plan Growth */}
          <div className="flex flex-col justify-between bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg transition-all hover:border-outline">
            <div>
              <div className="flex justify-between items-center mb-space-sm">
                <span className="font-mono-eyebrow text-xs bg-surface-container-low px-2.5 py-1 rounded text-secondary font-semibold">Dinámico</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Plan Growth</h3>
              <p className="text-body-sm font-body-sm text-secondary mb-space-md">Para comercios y negocios que necesitan catálogo interactivo y sincronización de stock/pedidos.</p>
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/60 mb-space-md">
                <div className="text-xs text-secondary font-mono-eyebrow">Setup Inicial (Única vez)</div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-mono-metric text-mono-metric text-on-surface font-extrabold">$89.000</span>
                  <span className="text-xs font-mono-eyebrow text-secondary">pesos</span>
                </div>
                <div className="mt-2 pt-2 border-t border-outline-variant/40 flex justify-between items-center text-xs">
                  <span className="text-secondary font-mono-eyebrow">Abono Mensual:</span>
                  <span className="text-tertiary font-bold font-mono-eyebrow bg-tertiary-fixed/30 px-2 py-0.5 rounded">GRATIS ($0/mes)</span>
                </div>
              </div>
              <div className="space-y-space-xs mb-space-lg">
                <p className="text-xs font-semibold text-on-surface uppercase tracking-wide font-mono-eyebrow mb-2">Entregables Incluidos:</p>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Web con catálogo interactivo</strong> para muestra ágil de productos/servicios.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Bot con memoria de estado</strong> (Postgres) que recuerda el carrito y cliente.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Integración directa a Google Sheets</strong> para guardar pedidos y leads en vivo.</span>
                </div>
              </div>
            </div>
            <a className="w-full text-center bg-surface-container-low hover:bg-surface-container text-on-surface font-label-btn text-label-btn py-3 rounded-xl border border-outline transition-colors" href="https://wa.me/5491100000000?text=Hola%20Wintech,%20quiero%20contratar%20el%20Plan%20Growth" target="_blank" rel="noopener noreferrer">
              Elegir Plan Growth
            </a>
          </div>

          {/* Plan IA */}
          <div className="relative flex flex-col justify-between bg-surface-container-lowest border-2 border-primary-container rounded-xl p-space-lg tactile-shadow">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-on-tertiary font-mono-eyebrow text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-sm">
              Recomendado / Mayor Retorno
            </div>
            <div>
              <div className="flex justify-between items-center mb-space-sm mt-1">
                <span className="font-mono-eyebrow text-xs bg-primary-fixed text-on-primary-fixed px-2.5 py-1 rounded font-semibold">Premium</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Plan IA</h3>
              <p className="text-body-sm font-body-sm text-secondary mb-space-md">La solución definitiva con inteligencia artificial autónoma que lee tu catálogo o manuales en PDF.</p>
              <div className="p-3.5 bg-primary-fixed/20 rounded-xl border border-primary-container/40 mb-space-md">
                <div className="text-xs text-primary font-mono-eyebrow font-semibold">Setup Inicial (Única vez)</div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-mono-metric text-mono-metric text-on-surface font-extrabold">$100.000</span>
                  <span className="text-xs font-mono-eyebrow text-secondary">pesos</span>
                </div>
                <div className="mt-2 pt-2 border-t border-primary-container/20 flex justify-between items-center text-xs">
                  <span className="text-secondary font-mono-eyebrow">Abono Mensual:</span>
                  <span className="text-tertiary font-bold font-mono-eyebrow bg-tertiary-fixed/40 px-2 py-0.5 rounded">GRATIS ($0/mes)</span>
                </div>
              </div>
              <div className="space-y-space-xs mb-space-lg">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide font-mono-eyebrow mb-2">Entregables Incluidos:</p>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary-container text-base shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  <span><strong>Todo lo anterior incluido</strong> (Catálogo + BD Postgres + Google Sheets).</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary-container text-base shrink-0 mt-0.5">smart_toy</span>
                  <span><strong>Conexión a LLM avanzado</strong> para responder consultas complejas y asesorar.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary-container text-base shrink-0 mt-0.5">picture_as_pdf</span>
                  <span><strong>Lectura de PDF del negocio</strong> para capacitar al bot automáticamente.</span>
                </div>
              </div>
            </div>
            <a className="w-full text-center bg-primary-container hover:bg-surface-tint text-on-tertiary font-label-btn text-label-btn py-3.5 rounded-xl border border-primary transition-all duration-150 tactile-shadow-sm font-bold active:translate-y-0.5" href="https://wa.me/5491100000000?text=Hola%20Wintech,%20quiero%20empezar%20con%20el%20Plan%20IA" target="_blank" rel="noopener noreferrer">
              Empezar con Plan IA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
