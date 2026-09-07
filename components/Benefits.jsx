export default function Benefits() {
  return (
    <section className="w-full max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-space-3xl md:py-space-4xl" id="beneficios">
      <div className="max-w-2xl mb-space-2xl">
        <span className="font-mono-eyebrow text-mono-eyebrow text-primary uppercase tracking-wider">Rendimiento Operativo</span>
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mt-1">
          Automatización real que multiplica tus resultados
        </h2>
        <p className="font-body-lead text-body-lead text-secondary mt-2">
          Métricas calculadas sobre despliegues activos en negocios locales y empresas de servicios.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg tactile-shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-surface-container-low border border-outline-variant flex items-center justify-center text-primary-container mb-space-md">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Ahorro de 80% en tiempo de atención al cliente</h3>
            <p className="text-body-sm font-body-sm text-secondary mb-space-md">
              Filtra preguntas repetitivas sobre precios, stock, horarios y ubicación sin intervención de personal.
            </p>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/60">
            <div className="flex justify-between text-xs font-mono-eyebrow mb-1.5">
              <span className="text-secondary">Automatización de rutinas</span>
              <span className="text-primary font-bold">80% Reducción</span>
            </div>
            <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
              <div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{ width: "80%" }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-secondary font-mono-eyebrow mt-2">
              <span>Manual: 100% carga</span>
              <span>Con Wintech: 20% carga</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg tactile-shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-surface-container-low border border-outline-variant flex items-center justify-center text-tertiary mb-space-md">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Aumento del triple (3x) en captura de leads</h3>
            <p className="text-body-sm font-body-sm text-secondary mb-space-md">
              Respuestas 24/7 vía webhook sin perder consultas en madrugadas, fines de semana o feriados.
            </p>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/60">
            <div className="text-xs font-mono-eyebrow text-secondary mb-3">Tasa de retención de prospectos:</div>
            <div className="flex items-end gap-6 h-24 pt-2 pb-1 justify-around border-b border-outline-variant/80">
              <div className="flex flex-col items-center gap-1.5 w-1/3">
                <span className="text-xs font-mono-eyebrow text-secondary">1x Base</span>
                <div className="w-full bg-secondary-fixed-dim h-8 rounded-t"></div>
                <span className="text-[11px] text-secondary font-mono-eyebrow">Antes</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 w-1/3">
                <span className="text-xs font-mono-eyebrow text-primary-container font-bold">3x Leads</span>
                <div className="w-full bg-primary-container h-20 rounded-t"></div>
                <span className="text-[11px] text-on-surface font-semibold font-mono-eyebrow">Con Wintech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg tactile-shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-surface-container-low border border-outline-variant flex items-center justify-center text-primary-container mb-space-md">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">100% de consultas atendidas al instante</h3>
            <p className="text-body-sm font-body-sm text-secondary mb-space-md">
              Cero colas de espera. El usuario recibe atención inmediata en su aplicación de mensajería preferida.
            </p>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/60 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono-eyebrow text-secondary">Tiempo promedio de respuesta</div>
              <div className="font-mono-metric text-mono-metric text-tertiary font-extrabold mt-0.5">&lt; 3 segundos</div>
              <div className="text-[11px] text-secondary">vs. 45 min promedio en canales tradicionales</div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-tertiary flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-xl">speed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
