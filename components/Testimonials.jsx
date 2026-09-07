export default function Testimonials() {
  return (
    <section className="w-full bg-surface-container-low/40 border-t border-outline-variant/60 py-space-3xl md:py-space-4xl" id="casos">
      <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-mono-eyebrow text-mono-eyebrow text-primary uppercase tracking-wider">Testimonios Comprobados</span>
          <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mt-1">
            Empresas reales que transformaron su atención
          </h2>
          <p className="font-body-lead text-body-lead text-secondary mt-2">
            Resultados tangibles con landing pages y flujos de automatización integrados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          
          {/* Testimonio 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg flex flex-col justify-between tactile-shadow-sm">
            <div>
              <div className="flex items-center gap-1 text-primary-container mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-default text-body-default text-on-surface mb-space-md italic">
                "Antes perdíamos decenas de ventas por responder tarde en Instagram y WhatsApp. Wintech nos armó el catálogo y el bot responde precios, compatibilidades y toma el pedido al instante."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-space-md border-t border-outline-variant/60">
              <img className="w-11 h-11 rounded-full object-cover border border-outline-variant" alt="Cliente 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmC8w_zZVlrrJKGO96tmQ3NHuQ9LYyKp5gdvh266_7hi3Ipqe5n9HW_H_S8KYqd_kbAHXf1_vWwZyqUeClhARRpAwaZgE9hssU8O9L3n4FSFjoxk_lx7W4AUtzdcoe9X_u6LwTvFHI90Nn97htUT1a3L66uQJGiXEK9MdN6TLg4Y8rCQRY_2FxTTFQCDMTQMtvclO-_kEcVs7qy-Kdg6UTX6sfsPTfI2skEDueiTUCB5kj5uPxtEf4JQ" />
              <div>
                <div className="text-sm font-bold text-on-surface">Lucas R.</div>
                <div className="text-xs text-secondary font-mono-eyebrow">Dueño de CeluStore Accesorios</div>
              </div>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg flex flex-col justify-between tactile-shadow-sm">
            <div>
              <div className="flex items-center gap-1 text-primary-container mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-default text-body-default text-on-surface mb-space-md italic">
                "Nuestros clientes tenían urgencias técnicas en horarios fuera de oficina. El bot filtra el tipo de falla, solicita la foto del equipo y agenda la visita técnica automáticamente."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-space-md border-t border-outline-variant/60">
              <img className="w-11 h-11 rounded-full object-cover border border-outline-variant" alt="Cliente 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx3PZFOUAWe_1F2TAeXkABISd-Fc8bE7vMCbFvBm9aqveD3sNjUsk8M0Ec8acCzMgjFlHVLTyI8t53H-MLnjj3qzrDoD9NkmtLsk0_HCa2MfxW7pwphA-5U5w9riSZpwVE4sUwSYIUXfA2igvUMVBDGkZRPEhvMw1tzTuDGeAowhaplzZVxCGsL1xZrecgwURCNid1yoMsvGwdUq5Hsdmi-ZsnEg2S4xi1N94muPl-9eRcFE15pOOCgA" />
              <div>
                <div className="text-sm font-bold text-on-surface">Ing. Mariana Gomez</div>
                <div className="text-xs text-secondary font-mono-eyebrow">Directora de Operaciones, Frigor Clima</div>
              </div>
            </div>
          </div>

          {/* Testimonio 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg flex flex-col justify-between tactile-shadow-sm">
            <div>
              <div className="flex items-center gap-1 text-primary-container mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-default text-body-default text-on-surface mb-space-md italic">
                "En horas pico de delivery era imposible atender las llamadas. Hoy los clientes eligen del menú, confirman dirección y el pedido cae directo en nuestra planilla de cocina."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-space-md border-t border-outline-variant/60">
              <img className="w-11 h-11 rounded-full object-cover border border-outline-variant" alt="Cliente 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB5Tzz9Wiy9oUCJDm3hU8lHM-mYCKKAintUj93UbAK9PM4xauLz97sg3AK1KUvTJW43AMd6DovYMHeBHk1ZePtjAgl8Ws3qTDHnTjRa2OS1vyvrYdhLL8gCCzT7-pjVXKhrIO-a5JJ5o2MkOPG5I2LfPe2yTcxlX-xFLcqy46JZvy4DFtsBgWwW3BtZhV0Lc1rLbiijN_Sc-6DYENbKLHlAGV1Veczh1Mz94Hjdvuk0crLgbCkBPVfTg" />
              <div>
                <div className="text-sm font-bold text-on-surface">Enzo V.</div>
                <div className="text-xs text-secondary font-mono-eyebrow">Gerente Gastronómico, Bella Nonna</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
