export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface dark:bg-surface-container-lowest border-t border-outline dark:border-outline-variant">
      <div className="w-full max-w-container-max mx-auto px-gutter-mobile md:px-gutter-desktop py-space-3xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-space-lg mb-space-xl">
          <div>
            <a className="text-headline-md font-headline-md font-extrabold text-inverse-on-surface dark:text-on-surface flex items-center gap-2 mb-1" href="#inicio">
              <div className="w-7 h-7 rounded-lg bg-primary-container flex items-center justify-center text-on-tertiary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              </div>
              <span>Wintech</span>
            </a>
            <p className="text-body-sm font-body-sm text-secondary-fixed-dim dark:text-secondary max-w-sm">
              Páginas web de alta conversión y automatizaciones de WhatsApp para negocios en crecimiento.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="text-body-sm font-body-sm text-secondary-fixed-dim dark:text-secondary hover:text-primary-container dark:hover:text-primary transition-colors duration-150" href="#">Términos de Servicio</a>
            <a className="text-body-sm font-body-sm text-secondary-fixed-dim dark:text-secondary hover:text-primary-container dark:hover:text-primary transition-colors duration-150" href="#">Privacidad</a>
            <a className="text-body-sm font-body-sm text-secondary-fixed-dim dark:text-secondary hover:text-primary-container dark:hover:text-primary transition-colors duration-150" href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer">Contacto WhatsApp</a>
            <a className="text-body-sm font-body-sm text-secondary-fixed-dim dark:text-secondary hover:text-primary-container dark:hover:text-primary transition-colors duration-150" href="#">Soporte Técnico</a>
          </nav>
        </div>
        <div className="pt-space-md border-t border-inverse-surface/40 dark:border-outline-variant/40 flex flex-col sm:flex-row justify-between items-center text-xs text-secondary-fixed-dim dark:text-secondary font-mono-eyebrow">
          <span>© 2026 Wintech Agencia Digital. Sin costos ocultos.</span>
          <span className="mt-2 sm:mt-0">Diseñado con precisión táctil y velocidad nativa.</span>
        </div>
      </div>
    </footer>
  );
}
