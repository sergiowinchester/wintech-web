export default function Pricing() {
  return (
    <section className="w-full bg-surface-container-low/60 border-y border-outline-variant/60 py-space-3xl md:py-space-4xl" id="precios">
      <div className="max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-mono-eyebrow text-mono-eyebrow text-primary uppercase tracking-wider">Tarifas Transparentes</span>
          <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mt-1 mb-space-xs">
            Planes claros adaptados a tu etapa de crecimiento
          </h2>
          <p className="font-body-lead text-body-lead text-secondary">
            Automatización con IA para WhatsApp y web diseñada para escalar tus ventas y atención.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
          
          {/* Tarjeta 1 - Plan Esencial */}
          <div className="flex flex-col justify-between bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg transition-all hover:border-outline">
            <div>
              <div className="flex justify-between items-center mb-space-sm">
                <span className="font-mono-eyebrow text-xs bg-surface-container-low px-2.5 py-1 rounded text-secondary font-semibold">Esencial</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Plan Esencial</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide font-mono-eyebrow mb-2">"Atención Inmediata"</p>
              <p className="text-body-sm font-body-sm text-secondary mb-space-md">
                Ideal para bares con alto volumen de reservas, estéticas, o negocios locales que necesitan organizar su bandeja de entrada y no dejar clientes esperando.
              </p>

              {/* Setup y Mantenimiento Cost */}
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/60 mb-space-md space-y-2">
                <div>
                  <div className="text-[11px] text-secondary font-mono-eyebrow uppercase">Setup Inicial (Única vez)</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-mono-metric text-mono-metric text-on-surface font-extrabold">$50 USD</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-outline-variant/40">
                  <div className="text-[11px] text-secondary font-mono-eyebrow uppercase">Mantenimiento Mensual</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-lg font-bold text-primary font-mono-metric">$11 USD</span>
                    <span className="text-xs font-mono-eyebrow text-secondary">/mes</span>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-space-xs mb-space-lg">
                <p className="text-xs font-semibold text-on-surface uppercase tracking-wide font-mono-eyebrow mb-2">Todo lo del Plan Esencial, más:</p>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">smart_toy</span>
                  <span><strong>Recepcionista IA 24/7:</strong> Responde al instante cualquier consulta básica con lenguaje natural y empatía (horarios, ubicación, menú/servicios).</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">filter_alt</span>
                  <span><strong>Filtro de Curiosos:</strong> Captura nombre y motivo real de la consulta, filtrando prospectos con intención real.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">support_agent</span>
                  <span><strong>Derivación Inteligente:</strong> Pausa y notifica al equipo humano ante dudas fuera de libreto o solicitudes complejas.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">info</span>
                  <span><strong>¿Qué incluye el mes?:</strong> Alojamiento en servidores de alta disponibilidad, monitoreo de WhatsApp, 1 actualización mensual y hasta 2.000 interacciones.</span>
                </div>
              </div>
            </div>

            <a 
              className="w-full text-center bg-surface-container-low hover:bg-surface-container text-on-surface font-label-btn text-label-btn py-3 rounded-xl border border-outline transition-colors flex items-center justify-center gap-2" 
              href="https://wa.me/5491159911591?text=Hola%20winweb%20estoy%20interesado%20en%20el%20plan%20Esencial" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base">check</span>
              Elegir Plan Esencial
            </a>
          </div>

          {/* Tarjeta 2 - Plan Crecimiento (DESTACADA) */}
          <div className="relative flex flex-col justify-between bg-surface-container-lowest border-2 border-primary-container rounded-xl p-space-lg tactile-shadow">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-on-tertiary font-mono-eyebrow text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-sm">
              Más Elegido / Recomendado
            </div>
            <div>
              <div className="flex justify-between items-center mb-space-sm mt-1">
                <span className="font-mono-eyebrow text-xs bg-primary-fixed text-on-primary-fixed px-2.5 py-1 rounded font-semibold">Crecimiento</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Plan Crecimiento</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide font-mono-eyebrow mb-2">"Cerrador de Ventas"</p>
              <p className="text-body-sm font-body-sm text-secondary mb-space-md">
                Ideal para tiendas online de accesorios, indumentaria o servicios profesionales que necesitan hacer seguimiento y agendar citas en automático.
              </p>

              {/* Setup y Mantenimiento Cost */}
              <div className="p-3.5 bg-primary-fixed/20 rounded-xl border border-primary-container/40 mb-space-md space-y-2">
                <div>
                  <div className="text-[11px] text-primary font-mono-eyebrow uppercase font-semibold">Setup Inicial (Única vez)</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-mono-metric text-mono-metric text-on-surface font-extrabold">$80 USD</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-primary-container/20">
                  <div className="text-[11px] text-primary font-mono-eyebrow uppercase font-semibold">Mantenimiento Mensual</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-lg font-bold text-primary font-mono-metric">$30 USD</span>
                    <span className="text-xs font-mono-eyebrow text-secondary">/mes</span>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-space-xs mb-space-lg">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide font-mono-eyebrow mb-2">Todo lo del Plan Esencial, más:</p>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary-container text-base shrink-0 mt-0.5">memory</span>
                  <span><strong>Memoria de Conversación:</strong> Recuerda el historial previo del cliente sin pedir datos dos veces.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary-container text-base shrink-0 mt-0.5">trending_up</span>
                  <span><strong>Vendedor Consultivo IA:</strong> Aplica técnicas activas de cierre y preguntas clave para empujar la venta.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary-container text-base shrink-0 mt-0.5">shopping_cart</span>
                  <span><strong>Rescate de "Carrito Abandonado":</strong> Seguimiento automático a las 24 horas a clientes indecisos.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary-container text-base shrink-0 mt-0.5">calendar_month</span>
                  <span><strong>Agenda Automatizada:</strong> Integración con calendario para reservas directas y sin solapamiento.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary-container text-base shrink-0 mt-0.5">info</span>
                  <span><strong>¿Qué incluye el mes?:</strong> 2 actualizaciones mensuales, revisión de chats para optimización y hasta 5.000 interacciones.</span>
                </div>
              </div>
            </div>

            <a 
              className="w-full text-center bg-primary-container hover:bg-surface-tint text-on-tertiary font-label-btn text-label-btn py-3.5 rounded-xl border border-primary transition-all duration-150 tactile-shadow-sm font-bold active:translate-y-0.5 flex items-center justify-center gap-2" 
              href="https://wa.me/5491159911591?text=Hola%20winweb%20estoy%20interesado%20en%20el%20plan%20Crecimiento" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base">rocket_launch</span>
              Elegir Plan Crecimiento
            </a>
          </div>

          {/* Tarjeta 3 - Plan Élite */}
          <div className="flex flex-col justify-between bg-surface-container-lowest border border-outline-variant rounded-xl p-space-lg transition-all hover:border-outline">
            <div>
              <div className="flex justify-between items-center mb-space-sm">
                <span className="font-mono-eyebrow text-xs bg-surface-container-low px-2.5 py-1 rounded text-secondary font-semibold">Escala & Enterprise</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Plan Élite</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide font-mono-eyebrow mb-2">"Ecosistema Autónomo"</p>
              <p className="text-body-sm font-body-sm text-secondary mb-space-md">
                Ideal para empresas consolidadas con catálogos amplios y logística que buscan delegar el 80% de su carga operativa de atención.
              </p>

              {/* Setup y Mantenimiento Cost */}
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/60 mb-space-md space-y-2">
                <div>
                  <div className="text-[11px] text-secondary font-mono-eyebrow uppercase">Setup Inicial (Única vez)</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-mono-metric text-mono-metric text-on-surface font-extrabold">$100 USD</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-outline-variant/40">
                  <div className="text-[11px] text-secondary font-mono-eyebrow uppercase">Mantenimiento Mensual</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-lg font-bold text-primary font-mono-metric">$50 USD</span>
                    <span className="text-xs font-mono-eyebrow text-secondary">/mes</span>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-space-xs mb-space-lg">
                <p className="text-xs font-semibold text-on-surface uppercase tracking-wide font-mono-eyebrow mb-2">Todo lo del Plan Crecimiento, más:</p>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">search</span>
                  <span><strong>Lector de Catálogos (Búsqueda Semántica):</strong> Consulta en milisegundos base de datos y confirma stock en tiempo real.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">payments</span>
                  <span><strong>Cobros y Envíos en el Chat:</strong> Links de pago automatizados y notificaciones de estado de despacho.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">campaign</span>
                  <span><strong>Campañas de Reactivación:</strong> Mensajes proactivos y personalizados para fechas clave sin riesgo de bloqueo.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">analytics</span>
                  <span><strong>Panel de Métricas:</strong> Tablero en vivo con ventas cerradas y tiempo operativo ahorrado.</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">info</span>
                  <span><strong>¿Qué incluye el mes?:</strong> Soporte prioritario, sincronización continua de catálogo, ajustes ilimitados y hasta 15.000 interacciones.</span>
                </div>
              </div>
            </div>

            <a 
              className="w-full text-center bg-surface-container-low hover:bg-surface-container text-on-surface font-label-btn text-label-btn py-3 rounded-xl border border-outline transition-colors flex items-center justify-center gap-2" 
              href="https://wa.me/5491159911591?text=Hola%20winweb%20estoy%20interesado%20en%20el%20plan%20Élite" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base">check</span>
              Elegir Plan Élite
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}