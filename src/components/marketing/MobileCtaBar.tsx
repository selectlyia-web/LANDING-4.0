/**
 * Barra de CTA fixa — EXCLUSIVA da experiência mobile (oculta em md+).
 * O convite acompanha o polegar durante toda a rolagem. Respeita a Safe Area
 * do iOS via env(safe-area-inset-bottom) (utilitário pb-safe em globals.css).
 */
export function MobileCtaBar(): React.JSX.Element {
  return (
    <div className="pb-safe fixed inset-x-0 bottom-0 z-20 border-t border-border-subtle bg-surface-base/90 px-4 pt-3 backdrop-blur md:hidden">
      <a
        href="#acesso"
        className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
      >
        Pedir acesso antecipado
      </a>
    </div>
  );
}
